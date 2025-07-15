import  { Router } from "express";
import { ImgUpload } from "../utils/services/multer_service.js";
import { InsertBlog, FatchAllBlog, ShowFullBlog } from "../controllers/blog_controller.js";
import { CommentModel} from "../models/comment_model.js";

const router = Router();


router.post('/add', ImgUpload.single('coverImage'), InsertBlog);

router.get('/showblog',  FatchAllBlog);

router.get('/:id', ShowFullBlog);



router.post('/comment/:blogId', async (req, res)=>{
    await CommentModel.create({
        comment: req.body.comment,
        blogId: req.params.blogId,
        createdBy: req.user._id      
    });

    return res.redirect(`/blog/${req.params.blogId}`)
})


export const BlogRouter = router;