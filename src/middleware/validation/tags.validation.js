import { body, param } from "express-validator";
import { TagsModels } from "../../models/tag.models.js";

export const createdTagsValidation = [
  body("name")
    .isLength({ min: 2, max: 30 })
    .withMessage("el contenido debe de contener como entre 2 a 30 caracteres")
    .notEmpty()
    .withMessage("el campo contenido es obligatorio")
    .trim()
    .custom(async (value) => {
      const nameBD = await TagsModels.findOne({ name: value });
      if (nameBD) {
        throw new Error("ya existe ese nombre");
      }
    }),
  body("description")
    .isLength({ max: 200 })
    .withMessage(
      "la descripcion solamente puede tener hasta 200 caracteres como maximo"
    ),
];

export const getTagsByPkValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage("debe de ser de tipo id"),
];

export const updateTagsValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage("debe de ser de tipo id"),
  body("name")
    .isLength({ min: 2, max: 30 })
    .withMessage("el contenido debe de contener como entre 2 a 30 caracteres")
    .notEmpty()
    .withMessage("el campo contenido es obligatorio")
    .trim()
    .custom(async (value) => {
      const nameBD = await TagsModels.findOne({ name: value });
      if (nameBD) {
        throw new Error("ya existe ese nombre");
      }
    }),
  body("description")
    .isLength({ max: 200 })
    .withMessage(
      "la descripcion solamente puede tener hasta 200 caracteres como maximo"
    ),
];

export const deletedTagsValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage("debe de ser de tipo id"),
];
