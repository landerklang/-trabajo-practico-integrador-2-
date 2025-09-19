import jws from "jsonwebtoken";

export const generatorToken = (paylod) => {
  try {
    return jws.sign(paylod, process.env.JWT_SECRET, { expiresIn: "1h" });
    // probar despues si distimina en 1h a 1H
  } catch (error) {
    throw new Error("Error al general un token" + error.message);
  }
};

export const verifytoken = (token) => {
  try {
    return jws.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error("Error al verificar un token" + error.message);
  }
};
