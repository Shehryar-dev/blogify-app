import  { Router } from "express";
import { ImgUpload } from "../utils/services/multer_service.js";
import { InsertBlog, FatchAllBlog, ShowFullBlog, CommentHandleasync } from "../controllers/blog_controller.js";

const router = Router();


router.post('/add', ImgUpload.single('coverImage'), InsertBlog);
router.get('/showblog',  FatchAllBlog);
router.get('/:id', ShowFullBlog);
router.post('/comment/:blogId', CommentHandleasync);


export const BlogRouter = router;