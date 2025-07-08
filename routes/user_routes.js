import  { Router } from "express";
import {UserModel} from "../models/user_model.js";

const router = Router();

router.post('/signup', async (req, resp)=>{
    const {fullName, email, password} = req.body;
    await UserModel.create({
        fullName,
        email,
        password
    });

    return resp.redirect('/')
});

export const UserRouter = router;