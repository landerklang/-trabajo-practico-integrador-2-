import { matchedData } from "express-validator";
import { ArticleModels } from "../models/article.models.js";

export const createdArticle = async (req, res) => {
  const { title, content, excerpt, status, tags } = req.body;
  try {
    const create = await ArticleModels.create({
      title: title,
      content: content,
      excerpt: excerpt,
      status: status,
      author: req.user._id,
      tags: tags,
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

export const getAllArticle = async (req, res) => {
  try {
    const Article = await ArticleModels.find()
      .populate("author")
      .populate("tags");
    res.status(200).json({ ok: true, data: Article });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getArticleByPk = async (req, res) => {
  const { id } = req.params;

  try {
    const ArticleId = await ArticleModels.findById(id)
      .populate("author")
      .populate("tags");
    if (!ArticleId) {
      res.status(404).json({ ok: false, msg: "no se encontro al articulo" });
    } else {
      res.status(200).json({ ok: true, data: ArticleId });
    }
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getMyArticle = async (req, res) => {
  const { my } = req.user._id;

  try {
    const ArticleId = await ArticleModels.findById(my, { author: id })
      .populate("author")
      .populate("tags");
    if (!ArticleId) {
      res.status(404).json({ ok: false, msg: "no se encontro al articulo" });
    } else {
      res.status(200).json({ ok: true, data: ArticleId });
    }
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { title, content, excerpt, status } = req.body;
  try {
    const update = await ArticleModels.findByIdAndUpdate(
      id,
      { title, content, excerpt, status },
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

export const deletedArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await ArticleModels.findOneAndDelete(id);
    res
      .status(200)
      .json({ ok: true, msg: "se elimino de forma exitosa", data: deleted });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};
