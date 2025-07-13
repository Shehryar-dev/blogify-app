import express, { Router } from "express";
import { AddBlog,  HomeRender, SignInRender, SignUpRender, ShowBlog } from "../controllers/static_controller.js";

const router = Router();

router.get('/', HomeRender);

router.get('/login', SignInRender);

router.get('/signup', SignUpRender);

router.get('/addblog', AddBlog);

router.get('/showblog', ShowBlog);


export const StaticRouter = router;