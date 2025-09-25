import { body, param } from "express-validator";
import { UserModel } from "../../models/user.model.js";

export const createdUserValidation = [
  body("username")
    .isString()
    .withMessage("el usuario debe de ser alfanumerioco")
    .isLength({ min: 3, max: 20 })
    .withMessage("el usuario debe de contener entre 2 a 20 caracteres")
    .notEmpty()
    .withMessage("el campo usuario debe de ser obligatorio")
    .custom(async (value) => {
      const nameBD = await UserModel.findOne({ username: value });
      if (nameBD) {
        throw new Error("el nombre ya esta utilizado");
      }
    }),
  body("gmail")
    .isEmail()
    .withMessage("debe de ser de tipo gmail el campo")
    .notEmpty()
    .withMessage("el campo gmail es obligatorio")
    .isString()
    .withMessage("el campo gmail tiene que ser de tipo string")
    .custom(async (values) => {
      const gmailBD = await UserModel.find({ gmail: values });
      if (gmailBD) {
        throw new Error("el gmail ya esta utilizado");
      }
    }),
  body("password").notEmpty().withMessage("el password es obligatorio"),
  body("role")
    .isString()
    .withMessage("el role debe de ser de tipo string")
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
    })
    .withMessage(
      "debe de contener como minimo 8 caracteres ,1 mayuscula,1minuscula,1 numero"
    )
    .custom(async (value) => {
      const roleEnu = value;
      if (roleEnu !== "user" && roleEnu !== "admin") {
        throw new Error("solamente puede contener los rol admin o user");
      }
    }),
  body("profiler.firstName")
    .isLength({ min: 2, max: 50 })
    .withMessage("el primer nombres debe contener entre 2 a 50 caracteres")
    .isAlpha("es-ES", { ignore: " " })
    .withMessage("el primer nombre debe se permiten letras"),
  body("profiler.lastName")
    .notEmpty()
    .withMessage("el apellido debe de ser obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("el apellido debe de contener entre 2 a 50 caracteres")
    .isAlpha("es-ES", { ignore: " " })
    .withMessage("el primer nombre debe se permiten letras"),
  body("profiler.biography")
    .notEmpty()
    .withMessage("es obligatorio colocar la biografia")
    .isLength({ max: 500 })
    .withMessage("la biografia solomente puede contener 500 caractere")
    .isString()
    .withMessage("la biografia debe de ser de tipo string"),
  body("profiler.avatarUrl")
    .isURL()
    .withMessage("el avartarUrl debe de ser de tipo Url")
    .optional(),
];

export const getallUsersValidation = [];

export const getUserByPkValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage("debe de ser de tipo id"),
];

export const updateProfileValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage("debe de ser de tipo id"),
  body("profiler.firstName")
    .isLength({ min: 2, max: 50 })
    .withMessage("el primer nombres debe contener entre 2 a 50 caracteres")
    .isAlpha("es-ES", { ignore: " " })
    .withMessage("el primer nombre debe se permiten letras"),
  body("profiler.lastName")
    .notEmpty()
    .withMessage("el apellido debe de ser obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("el apellido debe de contener entre 2 a 50 caracteres")
    .isAlpha("es-ES", { ignore: " " })
    .withMessage("el primer nombre debe se permiten letras"),
  body("profiler.biography")
    .notEmpty()
    .withMessage("es obligatorio colocar la biografia")
    .isLength({ max: 500 })
    .withMessage("la biografia solomente puede contener 500 caractere")
    .isString()
    .withMessage("la biografia debe de ser de tipo string"),
  body("profiler.avatarUrl")
    .isURL()
    .withMessage("el avartarUrl debe de ser de tipo Url")
    .optional(),
];

export const updateUserValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage("debe de ser de tipo id"),
  body("username")
    .isString()
    .withMessage("el usuario debe de ser alfanumerioco")
    .isLength({ min: 3, max: 20 })
    .withMessage("el usuario debe de contener entre 2 a 20 caracteres")
    .notEmpty()
    .withMessage("el campo usuario debe de ser obligatorio")
    .custom(async (value) => {
      const nameBD = await UserModel.findOne({ username: value });
      if (nameBD) {
        throw new Error("el nombre ya esta utilizado");
      }
    }),
  body("gmail")
    .isEmail()
    .withMessage("debe de ser de tipo gmail el campo")
    .notEmpty()
    .withMessage("el campo gmail es obligatorio")
    .isString()
    .withMessage("el campo gmail tiene que ser de tipo string")
    .custom(async (values) => {
      const gmailBD = await UserModel.find({ gmail: values });
      if (gmailBD) {
        throw new Error("el gmail ya esta utilizado");
      }
    }),
  body("password").notEmpty().withMessage("el password es obligatorio"),
  body("role")
    .isString()
    .withMessage("el role debe de ser de tipo string")
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
    })
    .withMessage(
      "debe de contener como minimo 8 caracteres ,1 mayuscula,1minuscula,1 numero"
    )
    .custom(async (value) => {
      const roleEnu = value;
      if (roleEnu !== "user" && roleEnu !== "admin") {
        throw new Error("solamente puede contener los rol admin o user");
      }
    }),
  body("profiler.firstName")
    .isLength({ min: 2, max: 50 })
    .withMessage("el primer nombres debe contener entre 2 a 50 caracteres")
    .isAlpha("es-ES", { ignore: " " })
    .withMessage("el primer nombre debe se permiten letras"),
  body("profiler.lastName")
    .notEmpty()
    .withMessage("el apellido debe de ser obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("el apellido debe de contener entre 2 a 50 caracteres")
    .isAlpha("es-ES", { ignore: " " })
    .withMessage("el primer nombre debe se permiten letras"),
  body("profiler.biography")
    .notEmpty()
    .withMessage("es obligatorio colocar la biografia")
    .isLength({ max: 500 })
    .withMessage("la biografia solomente puede contener 500 caractere")
    .isString()
    .withMessage("la biografia debe de ser de tipo string"),
  body("profiler.avatarUrl")
    .isURL()
    .withMessage("el avartarUrl debe de ser de tipo Url")
    .optional(),
];

export const deletedUserValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage("debe de ser de tipo id"),
];
