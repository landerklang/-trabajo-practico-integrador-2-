import { ArticleModels } from "../models/article.models.js";
export const ownerMiddleware = async (req, res, next) => {
  const owner = req.user;
  const IdUser = await ArticleModels.findById(req.params.id);
  if (owner._id !== IdUser.author && owner.role !== "admin") {
    // console.log(IdUser);
    return res
      .status(401)
      .json({ message: "no eres el dueño de este articulo" });
  }
  next();
};
