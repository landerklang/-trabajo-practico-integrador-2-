import { body, param } from "express-validator";
import { ArticleModels } from "../../models/article.models.js";
import { UserModel } from "../../models/user.model.js";

export const createdCommentValidation = [
  body("content")
    .isLength({ min: 5, max: 500 })
    .withMessage("el contenido debe de contener como entre 5 a 500 caracteres")
    .notEmpty()
    .withMessage("el campo contenido es obligatorio"),
  body("article")
    .notEmpty()
    .withMessage("el article es obligatorio")
    .custom(async (value) => {
      const articleBD = await ArticleModels.findByPk(value);
      if (!articleBD) {
        throw new Error("el articulo no existe");
      }
    }),
  body("author").custom(async (value) => {
    const userBD = await UserModel.findByPk(value);
    if (!userBD) {
      throw new Error("el usuario no existe");
    }
  }),
];

export const getCommentByPkValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage("debe de ser de tipo id"),
];

export const updateCommentValidation = [
  body("content")
    .isLength({ min: 5, max: 500 })
    .withMessage("el contenido debe de contener como entre 5 a 500 caracteres")
    .notEmpty()
    .withMessage("el campo contenido es obligatorio"),
  body("article")
    .notEmpty()
    .withMessage("el article es obligatorio")
    .custom(async (value) => {
      const articleBD = await ArticleModels.findByPk(value);
      if (!articleBD) {
        throw new Error("el articulo no existe");
      }
    }),
  body("author").custom(async (value) => {
    const userBD = await UserModel.findByPk(value);
    if (!userBD) {
      throw new Error("el author no existe");
    }
  }),
];

export const deletedCommentValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage("debe de ser de tipo id"),
];
