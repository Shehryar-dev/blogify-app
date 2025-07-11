import { UserModel } from "../models/user_model.js";

export async function SignupHandle(req, resp) {
  console.log("BODY:", req.body);

  const { fullName, email, password } = req.body;
  console.log("name:", req.body.username);
  await UserModel.create({
    fullName,
    email,
    password,
  });

  return resp.redirect("/");
}

export async function SigninHandle(req, res) {
  const { email, password } = req.body;

  const token = await UserModel.matchPasswordAndGenerateToken(email, password);

  console.log("Token:", token);

  return res.cookie('token', token).redirect("/");
}
