import express from 'express';
import authController from '../controller/auth.controller.js';

const permissionRouter = express.Router()

permissionRouter.get('/auth/user', authController.protect, authController.checkPermission, authController.getUser)
permissionRouter.get('/auth/get-profile/:id', authController.protect, authController.checkPermission, authController.getProfile)
permissionRouter.post('/auth/profile',  authController.protect, authController.checkPermission, authController.commitProfile)
permissionRouter.put('/auth/update-profile/:id',  authController.protect, authController.checkPermission, authController.protect, authController.protect, authController.updateProfile)

export default permissionRouter