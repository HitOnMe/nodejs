
import { BadRequestException } from '../common/helper/error.helper.js';
import { responseSuccess, responseError, handleSuccess } from '../common/helper/response.helper.js';
import { authService } from '../service/auth.service.js';
const authController = {
    protect: async(req, res, next)=> {
        try{
             await authService.protect(req)
             next()
        }catch(error){
            next(error)
        }
    },
    updateUser: async(req, res, next)=> {
        try{
             const user = await authService.update_user(req)
             return handleSuccess(res, user, 'Cập nhật user thành công!')
        }catch(error){
            next(error)
        }
    },
    getUser: async(req, res, next) => {
        try {

            const data = await authService.getUser(req)
            return handleSuccess(res, data, 'Lấy danh sách thành công!')
        }catch(error){
            next(error)
        }
    },
    user_register : async(req, res, next) => {
        try{
           await authService.register(req, 'USER')
           return handleSuccess(res, req.body, 'Đăng ký thành công')
        }
      
      catch(error){
        console.log(error)
        next(error)
       }
    },
    admin_register : async(req, res, next) => {
        try{
           await authService.register(req, 'ADMIN')
           return handleSuccess(res, req.body, 'Đăng ký thành công')
        }
      
      catch(error){
        next(error)
       }
    },
    user_login: async(req, res,next) => {
        try{
           const token = await authService.login(req, 'USER')
           res.set('accessToken', token.accessToken)
           res.set('refreshToken', token.refreshToken)
           return handleSuccess(res, req.body, 'Đăng nhập thành công')
        }catch(error){
            next(error)
        }
    },
    admin_login: async(req, res,next) => {
        try{
            const isAdmin =  await authService.checkPermission(req, "ADMIN")
            if(!isAdmin){
                throw new BadRequestException('Tài khoản không tồn tại!')
            }
            const token = await authService.login(req, 'ADMIN')
            res.set('accessToken', token.accessToken)
            res.set('refreshToken', token.refreshToken)
            return handleSuccess(res, req.body, 'Đăng nhập thành công')
        }catch(error){
            next(error)
        }
    },
    deleteUser: async(req, res, next)=> {
        try{
             await authService.delete_user(req)
             
            return handleSuccess(res, req.user, 'delete thành công')
        }catch(error){
            console.log(error)
            next(error)
        }
    },
    
     updateUser: async(req, res, next)=> {
        try{
             const user = await authService.update_user(req)
             return handleSuccess(res, user, 'Cập nhật user thành công!')
        }catch(error){
            next(error)
        }
    },
    saveImage: async(req, res, next)=> {
        try{
             const user = await authService.save_image(req)
             return handleSuccess(res, user, 'Lưu ảnh thành công!')
        }catch(error){
            console.log(error)
            next(error)
        }
    },
    unSaveImage: async(req, res, next)=> {
        try{
             const user = await authService.unSaveImage(req)
             return handleSuccess(res, user, 'Cập nhật lưu ảnh thành công!')
        }catch(error){
            console.log(error)
            next(error)
        }
    },
    deleteImage: async(req, res, next)=> {
        try{
                const user = await authService.deleteImage(req)
                return handleSuccess(res, user, 'Xóa ảnh thành công!')
        }catch(error){
            console.log(error)
            next(error)
        }
    },
    savedImage: async(req, res, next)=> {
        try{
             const user = await authService.checkSavedImage(req)
             return handleSuccess(res, user, 'Lưu ảnh thành công!')
        }catch(error){
            console.log(error)
            next(error)
        }
    },
    listImageById: async(req, res, next)=> {
        try{
             const user = await authService.listImageById(req)
             return handleSuccess(res, user, 'Lấy danh sách ảnh thành công!')
        }catch(error){
            next(error)
        }
    },
    refreshToken: async(req, res, next) => {
        try {
            await authService.refreshToken(req, res)
            
        } catch(error) {
            console.log(error)
            next(error)
        }
    },
    facebookLogin: async(req, res, next) => {
        try {
            const token = await authService.facebookLogin(req)
            return handleSuccess(res, req.body, 'Đăng nhập facebook thành công', token)
        } catch(error){
            next(error)
        }
    },
    getProfile: async(req, res, next) => {
        try{
            await authService.getProfile(req)
            return handleSuccess(res, req.body, 'Lấy profile thành công')
        } catch(error) {
            next(error)
        }
    },
    commitProfile: async(req, res, next) => {
        try{
            await authService.commitProfile(req)
            return handleSuccess(res, req.body, 'Tạo profile thành công')
        } catch(error) {
            next(error)
        }
    },
    updateProfile: async(req, res, next) => {
        try {
            await authService.updateProfile(req)
            return handleSuccess(res, req.body, 'update Profile thành công')
        } catch(error) {
       
            next(error)
        }
    },
    checkPermission: async(req, res, next) => {
        try {
            await authService.checkPermission(req)
            next()
        } catch(error){
            next(error)
        }
    }
    
}
export default authController