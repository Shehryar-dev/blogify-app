import  { Router } from "express";
import { ImgUpload } from "../utils/services/multer_service.js";
import { InsertBlog, FatchAllBlog } from "../controllers/blog_controller.js";

const router = Router();

router.get('/add-new', (req, res)=>{
    return res.render('addblog',{
        user: req.user
    });
});

router.post('/add', ImgUpload.single('coverImage'), InsertBlog);

router.get('/showblog',  FatchAllBlog);
  


export const BlogRouter = router;