import  { Router } from "express";
import { ImgUpload } from "../utils/services/multer_service.js";
import { InsertBlog, FatchAllBlog, ShowFullBlog } from "../controllers/blog_controller.js";

const router = Router();


router.post('/add', ImgUpload.single('coverImage'), InsertBlog);

router.get('/showblog',  FatchAllBlog);

router.get('/:id', ShowFullBlog);


export const BlogRouter = router;