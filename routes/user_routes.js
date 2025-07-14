import  { Router } from "express";
import {LogoutHandler, SigninHandle, SignupHandle} from '../controllers/user_controller.js'
const router = Router();

router.post('/signup', SignupHandle);
router.post('/signin', SigninHandle);
router.get('/logout', LogoutHandler);

export const UserRouter = router;