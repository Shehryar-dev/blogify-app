import express, { Router } from "express";
import { HomeRender, SignInRender, SignUpRender } from "../controllers/static_controller.js";

const router = Router();

router.get('/', HomeRender);

router.get('/login', SignInRender);

router.get('/signup', SignUpRender);

export const StaticRouter = router;