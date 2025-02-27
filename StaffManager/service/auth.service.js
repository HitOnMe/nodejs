import prisma from '../common/prisma/prisma.js';
import bcrypt from 'bcrypt'
import {BadRequestException} from '../common/helper/error.helper.js'
import {responseError, responseSuccess, handleSuccess} from '../common/helper/response.helper.js';
import jwt from 'jsonwebtoken';
import {TOKENSECRET, ACCESSEXPIRE, REFRESHEXPIRE} from '../common/constants/constants.js'
import sendMail from '../common/nodemailder/sendmail.js';
export const authService = {
    protect: async(req) => {
    
        const token = req.headers['x-api-key']
        console.log(token)
        if(!token){
            throw new BadRequestException('Không có quyền')
        }
        const isUserValid =  jwt.verify(token, TOKENSECRET)

        const user = await prisma.user.findFirst({
            where: {
                id: isUserValid.id
            }
        })
        if(!user){
            throw new BadRequestException('Người dùng không tồn tại')
        }
        req.user = user
        delete(req.user.password)
    },
    checkPermission: async(req, role) => {
        const user = await prisma.user.findFirst({
            where: {
                email: req.body.email
            }
        })
        return user.role === role
    },
    getUser: async(req) => {
        return await prisma.user.findMany()
    },
    register : async(req, role) => {
        //Check email if exists
        const mailExist = await authService.checkEmail(req)
        //If email exists, throw error email already existed
        if(mailExist){
            throw new BadRequestException('Email đã đăng ký. Vui lòng đăng nhập')
        }
        const newPassword =await authService.cryptPassWord(req)
        req.body.password = newPassword
        const data = {...req.body, role}

        await prisma.user.create({
            data: data
        })

        sendMail(req.body.email).catch(console.error)
        
    },
    login: async(req, role) => {
        //Check email if exists
        const mailExist = await authService.checkEmail(req)
        //Check role

        if(!mailExist){
            throw new BadRequestException('Tài khoản không tồn tại! Vui lòng đăng ký')
        }
        const user =await  prisma.user.findFirst({
            where:{
                email: req.body.email,
            }
        })
     
            const IsvalidPassword =  await bcrypt.compare(req.body.password, user.password)
            if(!IsvalidPassword){
                throw new BadRequestException('Đăng nhập thất bại!')
            }
            delete(req.body.password)
        const data = { id: user.id, ...req.body, role: user.role}
        const accessToken =  await authService.createToken(data, 'accessToken')
        const refreshToken =  await authService.createToken(data, '')
        const token = {accessToken, refreshToken}
            
        return token
    },
    delete_user: async(req) => {
        const user = await authService.checkuser(req)
        if(user.id === 1) {
            throw new BadRequestException('Không có quyền!')
        }
        return await prisma.user.delete({
            where:{
                id: +req.params.id
            }
        })
    },
    update_user: async(req) => {
        const user = await authService.checkuser(req)
        console.log(user)
        
        return await prisma.user.update({
            where:{
                id: +req.params.id
            },
            data: req.body
        })
    },
    listImageById: async(req) => {
        return await prisma.img.findMany({
            where: {
                userId: +req.params.id
            }
        })
    },
    save_image: async(req) => {
       
        const isImageSave = await prisma.saveImage.findFirst({
            where: {
                image_id: +req.params.id,
                isSave:true
            }
        })
        if(isImageSave){
            throw new BadRequestException('Ảnh này đã được lưu trước đó')
        }
        const data = {
            image_id : +req.params.id,
            user_id: req.user.id,
            isSave: true
        }
        return await prisma.saveImage.create({
            data: data
        })
    },
    unSaveImage: async(req) => {
        const saveImage = await prisma.saveImage.findFirst({
            where:  {
                image_id: +req.params.id
            }
        })
        const saveChange = !saveImage?.isSave
        const data = {
            image_id : +req.params.id,
            user_id: req.user.id,
            isSave: saveChange
        }


        return await prisma.saveImage.update({
            where: {
                image_id: +req.params.id 
            },
            data: data
        })
    },
    deleteImage: async(req) => {
        const image = await prisma.img.findFirst({
            where:  {
                id: +req.params.id
            }
        })
        if(!image){
            throw new BadRequestException('Không tìm thấy ảnh!')
        }
        return await prisma.img.delete({
            where: {
                id: +req.params.id
            }
        })
    },
    checkSavedImage: async(req, res) =>{
        const isUserExist = await prisma.user.findFirst({
            where: {
                id: +req.params.id
            }
        })
        if(!isUserExist){
            throw new BadRequestException('User này không tồn tại!')
        }
        const listSavedImage = await prisma.saveImage.findMany({
            where: {
                user_id: +req.params.id,
                isSave: true
            }
        })
        if(listSavedImage.length === 0) {
            throw new BadRequestException('User này không có ảnh lưu')
        }
        return listSavedImage
    },
    refreshToken: async(req, res) => {
        const refreshToken = req.headers.refreshToken

        const accessToken = req.headers.accessToken
        if(!accessToken || !refreshToken){
            throw new BadRequestException("Vui lòng cung cấp token để tiếp tục sử dụng")
        }
        const refToken = await authService.verifyToken(refreshToken, 'refreshToken')
        const accToken =  await authService.verifyToken(accessToken, 'accessToken')
        
        if(refToken?.id  !== accToken?.id) {
            throw new BadRequestException('Token không hợp lệ')
        }
        const user = await prisma.user.findFirst({
            where: {
                email: req.body.email
            }
        })
        if(!user){
            throw new BadRequestException('user không tồn tại')
        }
        return await authService.createToken(req, '1h')
    },  
    checkEmail : async(req) => {
        return await prisma.user.findFirst({
            where: {
                email: req.body.email
            }
        })       
    },
    facebookLogin: async(req) => {
       
            const {name, email} = req.body;
            const mailExist = prisma.user.findFirst({
                where: {
                    email: email
                }
            })
            if(!mailExist) {
                await prisma.user.create({
                    data: {
                        email: email,
                        full_name: name,
                        face_app_id: id
                }
                })
            }
            return authService.createAccessToken(req)
        }
            ,
    createToken : async(data, type) => {
       return jwt.sign({data: data},TOKENSECRET, { expiresIn: type = 'accessToken' ? ACCESSEXPIRE : REFRESHEXPIRE})
    },
    verifyToken : async(token, type) => {
        return jwt.verify(token, TOKENSECRET, {ignoreExpiration: type === 'accessToken' ? true : false})
    },
    cryptPassWord : async(req) => {
     
            const salt = 10
     
            return await bcrypt.hash(req.body.password, salt)
    },
    
    getProfile: async(req) => {
       return await prisma.profile.findFirst({
            where:{
                id: req.params.id
            }
       })
    },
    commitProfile: async(req) => {
        return await prisma.profile.create({
            data: req.body
        })
    },
    updateProfile: async(req) => {
    
        return await prisma.profile.update({
            where: {
                id: req.params.id
            },
            data: req.body
        })
    },
    checkuser: async(req) => {
        const user = await prisma.user.findFirst({
            where: {
                id: +req.params.id
            }
        })
        req.user = user
        if(!user){
            throw new BadRequestException('User không tồn tại')
        }
        return user
    }
}