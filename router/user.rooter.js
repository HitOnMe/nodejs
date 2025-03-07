import express from 'express';
import authController from '../controller/auth.controller.js';
const user = express.Router()
user.post('/user/register',  authController.user_register)
user.post('/user/login',  authController.user_login)
user.post('/user/facebook-login',   authController.facebookLogin)
user.post('/auth/refreshToken',  authController.refreshToken)
user.post('/user/save-image/:id', authController.protect, authController.saveImage)
user.delete("/user/delete-image/:id", authController.protect, authController.deleteImage)
user.put('/user/unsave-image/:id', authController.protect, authController.unSaveImage)
user.get('/user/get-profile', authController.protect, authController.checkPermission, authController.getProfile)
user.post('/user/profile',  authController.protect, authController.checkPermission, authController.commitProfile)
user.put('/user/update-profile',  authController.protect, authController.checkPermission, authController.protect, authController.protect, authController.updateProfile)
export default user
