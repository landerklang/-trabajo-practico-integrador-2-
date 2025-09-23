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
