import  express, { Request, Response }  from 'express';
import { userController } from './users.controller';
import auth from '../../middleware/auth';
const router = express.Router();



router.get("/",userController.getUser);


router.put("/:id", auth("admin", "customer"), userController.updateUser);


router.delete("/:id", auth("admin"), userController.deleteUser);


export const userRoutes = router;