import express from 'express';
import authController from '../controller/auth.controller.js';
const admin = express.Router()
admin.post('/admin/register', authController.admin_register)
admin.post('/admin/login',   authController.admin_login)
admin.get('/admin/get-all-users', authController.protect, authController.checkPermission, authController.getUser)
admin.delete('/admin/delete-user/:id', authController.protect, authController.deleteUser)
admin.put('/admin/update-user/:id', authController.protect, authController.updateUser)
export default admin