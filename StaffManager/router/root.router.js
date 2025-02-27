import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swagger from '../common/swagger/init.swagger.js';
import authRooter from './auth.rooter.js';
import imageRouter from './image.router.js';
import permissionRouter from './perrmission.router.js';
const rootRooter = express.Router()
rootRooter.use(authRooter)
rootRooter.use(permissionRouter)
rootRooter.use(imageRouter)
rootRooter.use('/api-docs', swaggerUi.serve);
rootRooter.get('/api-docs', swaggerUi.setup(swagger));
export default rootRooter