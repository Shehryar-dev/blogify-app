import  { Router } from "express";


const router = Router();

router.get('/add-new', (req, res)=>{
    return res.render('addblog',{
        user: req.user
    });
});

router.post('/add', (req, res)=>{
    console.log(req.body)
    // return res.redirect('/',{
    //     user: req.user
    // });
    return res.json(req.body);
});


export const BlogRouter = router;