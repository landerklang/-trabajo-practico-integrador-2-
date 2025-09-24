import { ArticleModels } from "../models/article.models.js";
import { CommentModels } from "../models/comment.models.js";

export const createdComment = async (req, res) => {
  const { content, article } = req.body;
  try {
    const create = await CommentModels.create({
      content: content,
      author: req.user._id,
      article: article,
    });
    res
      .status(201)
      .json({ ok: true, msg: "se creó correctamente", data: create });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servido" });
  }
};

export const getCommentfromarticle = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await ArticleModels.findById(id)
      .populate("Comment")
      .populate("author");
    if (!article) {
      res
        .status(404)
        .json({ ok: false, msg: "no se encontro ningun articulo" });
    } else res.status(200).json({ ok: true, data: article });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getMyComment = async (req, res) => {
  const my = req.user._id;
  try {
    const comentario = await CommentModels.find({ author: my });
    if (!comentario) {
      res.status(404).json({ ok: false, msg: "no se encontro al usuario" });
    } else {
      res.status(200).json({ ok: true, data: comentario });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const updateCommet = async (req, res) => {
  const { author, content, article } = req.body;
  try {
    const update = await CommentModels.findByIdAndUpdate(
      id,
      { author, content, article },
      { new: true }
    );
    return res.status(200).json({ ok: true, data: update });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const deletedComment = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await CommentModelsS.findOneAndDelete(id);
    res
      .status(200)
      .json({ ok: true, msg: "se elimino de forma exitosa", data: deleted });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};
