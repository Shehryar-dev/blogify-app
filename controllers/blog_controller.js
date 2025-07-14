import { response } from "express";
import { Blog } from "../models/blog_model.js";

export async function InsertBlog(req, res) {
  const title = req.body.title ?? "";
  const body = req.body.body;
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
  const blogs = await Blog.find({}).populate("createdBy");
  return res
    .status(200)
    .json(blogs)
    .render("showblog", { blogs, user: req.user });
}

export async function ShowFullBlog(req, res) {
  const blogId = req.params.id;
  const singleBlog = await Blog.findById(blogId).populate("createdBy").then((response)=>{
    return response;
  }).catch((err)=>{
    console.log('error:',err);
  });
  const blogs = await Blog.find({});
  console.log(req.user)


  return res.render("showfullblog", {
    user:req.user,
    singleBlog,
    blogs,
  });
}
