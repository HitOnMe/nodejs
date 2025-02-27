import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import userController from '../controller/user.controller.js';
import authController from '../controller/auth.controller.js';

const imageRouter = express.Router();


const uploadDir = path.join(process.cwd(), 'uploads', 'image');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Lưu file vào thư mục
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Đổi tên file
    },
});
const upload = multer({ storage });
// API CRUD 
imageRouter.post("/image/upload", authController.protect, upload.single('file'), userController.createImage);
imageRouter.post("/image/comments/:id", userController.createComment)
imageRouter.get('/image/:id', userController.getImage);
imageRouter.get('/saved-image/list', userController.getListImage);
imageRouter.get('/saved-image/list/:id',  authController.protect, authController.listImageById)
imageRouter.get('/saved-image/list/:id', authController.savedImage)
export default imageRouter;
