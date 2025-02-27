import express from 'express';
import authController from '../controller/auth.controller.js';
const authRooter = express.Router()
authRooter.post('/auth/user/register',  authController.user_register)
authRooter.post('/auth/user/login',  authController.user_login)
authRooter.post('/auth/admin/register', authController.admin_register)
authRooter.post('/auth/admin/login',   authController.admin_login)
authRooter.post('/auth/facebook-login',   authController.facebookLogin)
authRooter.post('/auth/refreshToken',  authController.refreshToken)
authRooter.delete('/auth/user/delete/:id', authController.protect, authController.deleteUser)
authRooter.put('/auth/user/update/:id', authController.protect, authController.updateUser)
authRooter.post('/auth/user/save-image/:id', authController.protect, authController.saveImage)
authRooter.delete("/auth/user/delete-image/:id", authController.protect, authController.deleteImage)
authRooter.put('/auth/user/unsave-image/:id', authController.protect, authController.unSaveImage)
export default authRooter
