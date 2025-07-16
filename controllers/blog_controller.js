import { Blog } from "../models/blog_model.js";
import { CommentModel } from "../models/comment_model.js";


//Insert Blog
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


//Fetch All Blog
export async function FatchAllBlog(req, res) {
  const blogs = await Blog.find({}).populate("createdBy");
  return res
    .status(200)
    .json(blogs)
    .render("showblog", { blogs, user: req.user });
}


//Show full blog
export async function ShowFullBlog(req, res) {
  const blogId = req.params.id;

  try {
    const singleBlog = await Blog.findById(blogId).populate("createdBy");
    const blogs = await Blog.find({});

    const comment = await CommentModel.find({ blog: blogId }).populate("createdBy");

console.log('comment', comment)

    return res.render("showfullblog", {
      user: req.user, // for navbar + comment form
      singleBlog,
      blogs, // latest blogs on sidebar
      comment, // all comments on this blog
    });
  } catch (err) {
    console.log("error:", err);
    return res.status(500).send("Internal Server Error");
  }
}



//Comment Handling
export async function CommentHandleasync(req, res) {
  await CommentModel.create({
    comment: req.body.comment,
    blog: req.params.blogId,
    createdBy: req.user._id,
  });

  return res.redirect(`/blog/${req.params.blogId}`);
}
