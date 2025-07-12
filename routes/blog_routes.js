import  { Router } from "express";
// import { ImgUpload } from "../utils/services/multer_service.js";

import multer from 'multer'
import path from 'path';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/${req.user._id}`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);

  }
});

const upload = multer({ storage: storage });


const router = Router();

router.get('/add-new', (req, res)=>{
    return res.render('addblog',{
        user: req.user
    });
});

router.post('/add', upload.single('coverImage'), (req, res)=>{
    console.log(req.body)
    console.log('file', req.file);
    // return res.redirect('/',{
    //     user: req.user
    // });
    return res.json(req.body);
});


export const BlogRouter = router;