import express, { Router } from "express";
import { AddBlog,  HomeRender, SignInRender, SignUpRender } from "../controllers/static_controller.js";

const router = Router();

router.get('/', HomeRender);

router.get('/login', SignInRender);

router.get('/signup', SignUpRender);

router.get('/addblog', AddBlog);


export const StaticRouter = router;