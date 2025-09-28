import { param } from "express-validator";

export const updateRelacionFromArticleValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage(
      "el id esta incompleto o no es del tipo de id que se requiere"
    ),
  param("tagsid")
    .notEmpty()
    .withMessage("el id del tags se debe colocar")
    .isMongoId()
    .withMessage("el id del tags debe de ser de tipo idMongos ")
    .custom(async (value) => {
      const tagsTb = await TagsModels.findById(value);
      if (!tagsTb) {
        throw new Error("no se encontro a la tag");
      }
    }),
];

export const DeleteRelacionFromArticleValidation = [
  param("id")
    .notEmpty()
    .withMessage("el id es requerido en el endpoint")
    .isMongoId()
    .withMessage(
      "el id esta incompleto o no es del tipo de id que se requiere"
    ),
  param("tagsid")
    .notEmpty()
    .withMessage("el id del tags se debe colocar")
    .isMongoId()
    .withMessage("el id del tags debe de ser de tipo idMongos ")
    .custom(async (value) => {
      const tagsTb = await TagsModels.findById(value);
      if (!tagsTb) {
        throw new Error("no se encontro a la tag");
      }
    }),
];
