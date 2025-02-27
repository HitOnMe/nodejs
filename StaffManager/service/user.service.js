import jwt from 'jsonwebtoken';
import prisma from '../common/prisma/prisma.js';
import { TOKENSECRET } from '../common/constants/constants.js';
import { BadRequestException } from '../common/helper/error.helper.js';

export const userService = {
    getImage: async(req) => {
        const {id} = req.params
        const imageInfo = await prisma.img.findFirst({
            where: {
                id: +id
            }
        })
        delete(imageInfo.role)
        return imageInfo
    },
    getListImage : async(req) => {
        return await prisma.img.findMany({
            select: {
                id : true,
                title: true,
                url: true
            }
        })
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
    }
}