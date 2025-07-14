import { Blog } from "../models/blog_model.js";
export function HomeRender(req, res) {
  return res.render("home", {
    user: req.user,
  });
}

export function SignInRender(req, res) {
  return res.render("signin");
}

export function SignUpRender(req, res) {
  return res.render("signup");
}

export function AddBlog(req, res) {
  return res.render("addblog", {
    user: req.user,
  });
}

export async function ShowBlog(req, res) {
  const blogs = await Blog.find({});
  return res.render("showblog", {
    blogs: blogs,
    user: req.user,
  });
}


