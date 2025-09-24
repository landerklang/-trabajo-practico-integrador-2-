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
