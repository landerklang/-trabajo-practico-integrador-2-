import { verifytoken } from "../helpers/jwt.helpers.js";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies["token"];
    if (!token) {
      return res.status(401).json({ message: "el perfil no esta autenticado" });
    }
    const decode = verifytoken(token);
    req.user = decode;
    console.log(req.user);
    next();
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ message: "error interno del servidor" });
  }
};
