import jwt from "jsonwebtoken";

//secret created
const SECRET_KEY = "21r5OXiKuOysJnvJiswmNr9mfKbn6809ecRUj";

//token sign for user
export  function createTokenForUser(user) {
  //payload created
  const payload = {
    _id: user._id,
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
