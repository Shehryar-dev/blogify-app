import {Blog} from '../models/blog_model.js'

export async function InsertBlog(req, res) {
  const  title = req.body.title ?? '';
  const  body = req.body.body;
  const imgUrl = req.file.filename;
  const createdDate = req.user._id;
  const blog = await Blog.create({
    title: title,
    body: body,
    coverImage: imgUrl,
    createdBy: createdDate,
  });

  return res.status(201).redirect("/showblog");
}


export async function FatchAllBlog(req, res) {
    const blogs = await Blog.find().populate("createdBy");
    console.log('blog', blog);
    return res.status(200).json(blogs).render('showblog', {blogs , user:req.user});
} 