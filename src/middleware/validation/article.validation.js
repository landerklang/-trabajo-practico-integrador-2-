import { body, param } from "express-validator";
import { TagsModels } from "../../models/tag.models.js";

export const createdArticleValidation = [
  body("title")
    .isLength({ min: 3, max: 200 })
    .withMessage("el titulo debe de contener entre 2 a 200 caracteres")
    .notEmpty()
    .withMessage("el campo titulo debe de ser obligatorio"),
  body("content")
    .isLength({ min: 50 })
    .withMessage("el contenido debe de contener como minimo 50 caracteres")
    .notEmpty()
    .withMessage("el campo contenido es obligatorio"),
  body("excerpt")
    .notEmpty()
    .withMessage("el excerpt es obligatorio")
    .isLength({ max: 500 })
    .withMessage(
      "el campo excerpt debe de contener como maximo 500 caracteres"
    ),
  body("status").custom(async (value) => {
    const statusEnu = value;
    if (statusEnu !== "archived" && statusEnu !== "published") {
      throw new Error(
        "solamente puede contener los status published o archived"
      );
    }
  }),
  body("tags")
    .optional()
    .custom(async (value) => {
      const tagsTb = await TagsModels.findById(value);
      if (!tagsTb) {
        throw new Error("debe existir la tags para añadirla");
      }
    }),
];
export const getallUsersValidation = [];

export const getArticleByPkValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage(
      "el id esta incompleto o no es del tipo de id que se requiere"
    ),
];

export const updatearticleValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage(
      "el id esta incompleto o no es del tipo de id que se requiere"
    ),
  body("title")
    .isLength({ min: 3, max: 200 })
    .withMessage("el titulo debe de contener entre 2 a 200 caracteres")
    .notEmpty()
    .withMessage("el campo titulo debe de ser obligatorio"),
  body("content")
    .isLength({ min: 50 })
    .withMessage("el contenido debe de contener como minimo 50 caracteres")
    .notEmpty()
    .withMessage("el campo contenido es obligatorio"),
  body("excerpt")
    .notEmpty()
    .withMessage("el excerpt es obligatorio")
    .isLength({ max: 500 })
    .withMessage(
      "el campo excerpt debe de contener como maximo 500 caracteres"
    ),
  body("status").custom(async (value) => {
    const statusEnu = value;
    if (statusEnu !== "archived" && statusEnu !== "published") {
      throw new Error(
        "solamente puede contener los status published o archived"
      );
    }
  }),
  body("tags")
    .optional()
    .custom(async (value) => {
      const tagsTb = await TagsModels.findById(value);
      if (!tagsTb) {
        throw new Error("debe existir la tags para añadirla");
      }
    }),
];

export const deletedArticleValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage("debe de ser de tipo id"),
];
