import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
//secret created
const SECRET_KEY = process.env.SECRET_KEY;

console.log(SECRET_KEY);

//token sign for user
export function createTokenForUser(user) {
  //payload created
  const payload = {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    profileImgUrl: user.profileImgUrl,
    role: user.role,
  };

  //token signing
  const token = jwt.sign(payload, SECRET_KEY);

  //return token
  return token;
}

///varify token
export function validationToken(token) {
  const payload = jwt.verify(token, SECRET_KEY);
  return payload;
}
