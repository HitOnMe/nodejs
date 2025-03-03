import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import userController from '../controller/user.controller.js';
import authController from '../controller/auth.controller.js';

const image = express.Router();


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
image.post("/image/upload", authController.protect, authController.checkPermission, upload.single('file'), userController.createImage);
image.get('/image/get-image/:id', authController.protect, authController.checkPermission, userController.getImage);
image.get('/image/list-image', authController.protect, authController.checkPermission, userController.getListImage);
image.get('/image/saved-image/list',  authController.protect, authController.listImageById)
export default image
