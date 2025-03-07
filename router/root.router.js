import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swagger from '../common/swagger/init.swagger.js';
import user from './user.rooter.js';
import image from './image.router.js';
import admin from './admin.router.js';
import comment from './comment.router.js';
const rootRooter = express.Router()
rootRooter.use(user)
rootRooter.use(admin)
rootRooter.use(image)
rootRooter.use(comment)
rootRooter.use('/api-docs', swaggerUi.serve);
rootRooter.get('/api-docs', swaggerUi.setup(swagger));
export default rootRooter