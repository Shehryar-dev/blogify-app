import { validationToken } from "../utils/services/auth_service.js";

export function checkForAurhenticationCookies(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next();
    }

    try {
      const userPayload = validationToken(tokenCookieValue);
      req.user = userPayload;
    } catch (error) {
      console.log("middleware exp:", error);
    }
    return next();
  };
}
