


import authController from './auth.controller.js';
import userController from './user.controller.js';
const rootController = (role, auth) => {
  switch(auth) {
    case auth: return authController[auth]
  }
}
export default rootController