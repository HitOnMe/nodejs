
import { responseSuccess, responseError, handleSuccess } from '../common/helper/response.helper.js';
import { userService } from '../service/user.service.js';
const userController = {
   getImage: async(req, res, next) => {
    try{
       const data = await userService.getImage(req)
       return handleSuccess(res, data, 'Lấy chi tiết ảnh thành công!')
    }catch(error){
        console.log(error)
        next(error)
    }
   },
   getListImage: async(req, res, next) => {
    try{
        const data = await userService.getListImage(req)
        return handleSuccess(res, data, 'Lấy danh sách hình ảnh thành công!')
    }catch(error){
        next(error)
    }
   },
   updateImage: async(req, res ,next) => {
    try {
    return await userService.updateImage(req)
    } catch(error){
        next(error)
    }},
    createImage: async(req, res, next) => {
        try{
           const data = await userService.createImage(req)
           return handleSuccess(res, data, 'Tạo hình ảnh thành công!')
        }catch(error){
            console.log(error)
            next(error)
        }
    },
    createComment: async(req, res, next) => {
        try{
            const data = await userService.createComment(req)
           return handleSuccess(res, data, 'Bình luận ảnh thành công!')
        }catch(error){
            console.log(error)
            next(error)
        }
    }
}
export default userController