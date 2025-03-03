import jwt from 'jsonwebtoken';
import prisma from '../common/prisma/prisma.js';
import { TOKENSECRET } from '../common/constants/constants.js';
import { BadRequestException } from '../common/helper/error.helper.js';

export const userService = {
    getImage: async(req) => {
        const imageInfo = await prisma.img.findFirst({
            where: {
                id: +req.params.id
            }
        })
        return imageInfo
    },
    listImage : async(req) => {
        
        const data =  await prisma.img.findMany({
            select: {
                id : true,
                title: true,
                url: true,
                description: true
            }
        })
        return data
    },
    updateImage: async(req) => {
        const image = await prisma.img.findFirst({
            where:  {
                id: +req.params.id
            }
        })
        if(!image){
            throw new BadRequestException('Không tìm thấy ảnh!')
        }
        return await prisma.img.update({
            data: req.body
        })
    },
    createImage: async(req) => {
        const fileUrl = `/uploads/image/${req.file.filename}`;
        req.body.url = fileUrl
        delete(req.user.role)
        const data = Object.assign({}, req.body)
        const responseData = {...data, userId: req.user.id, createdBy: req.user}
        return await prisma.img.create({
            data: responseData
        })
    },  
    createComment : async(req) => {
        const token = req.headers['x-api-key']
        const user = jwt.verify(token, TOKENSECRET )
        const img = await prisma.img.findFirst({
            where: {
                id: +req.params.id
            }
        })
        if(!img){
            throw new BadRequestException('Không tìm thấy ảnh!')
        }
       
        const isCommentExist = await prisma.cmt.findFirst({
            where: {
                Img_id: +req.params.id,
                userId: req.user.id
            }
        })
        if(isCommentExist){
            throw new BadRequestException('Bạn đã bình luận ảnh này rôi!')
        }
        const data = {
            img: img,
            content: req.body.content, 
            createdBy: user.data,
            user: {connect: {id: user.data.id}},
            img: {connect: {id: +req.params.id}}
        }
        return await prisma.cmt.create({
            data: data
        })
    },
    comment_user : async(req) => {
        const token = req.headers['x-api-key']
        const user = jwt.verify(token, TOKENSECRET )
        return await prisma.user.findFirst({
            where: {
                id: user.data.id
            },
            include: {
                cmt: true
            }
        })
    },
    comment_image : async(req) => {
        const image = await prisma.img.findFirst({
            where: {
                id: +req.params.id
            },
            include : {
                cmt: true
            }
        })
        if(!image){
            throw new BadRequestException('Ảnh không tồn tại!')
        }
        return image
    },
    delete_comment : async(req) => {
        const user_cmt = await prisma.cmt.findMany({
            where: {
                userId: req.user.id,
                Img_id: +req.params.id
            }
        })
        console.log(user_cmt)
        if(user_cmt.length === 0){
            throw new BadRequestException('Bạn chưa có bình luận nào!')
        }
        req.cmt = user_cmt
       return await prisma.cmt.deleteMany({
        where: {
            userId: req.user.id,
            Img_id: +req.params.id
        }
       })
    }
}