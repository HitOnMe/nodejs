import express from 'express';
import userController from '../controller/user.controller.js';
import authController from '../controller/auth.controller.js';

const comment = express.Router();


comment.post("/comment/img/:id", authController.protect, authController.checkPermission, userController.createComment)
comment.get("/comment/comment-by-user", authController.protect, authController.checkPermission, userController.getCommentByUser)
comment.get("/comment/comment-by-image/:id", authController.protect, authController.checkPermission, userController.getCommentByImage)
comment.delete("/comment/delete-comment/:id", authController.protect, authController.checkPermission, userController.deleteCommentByUser)
export default comment
