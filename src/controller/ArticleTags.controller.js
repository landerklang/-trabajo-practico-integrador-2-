import { ArticleModels } from "../models/article.models.js";

export const updaterelacionfromarticle = async (req, res) => {
  const { id, tagsid } = req.params;
  try {
    const updateTag = await ArticleModels.findByIdAndUpdate(
      id,
      {
        $push: { tags: tagsid },
      },
      { new: true }
    );
    console.log(id);
    console.log(tagsid);
    res
      .status(200)
      .json({ ok: true, msg: "se añadio la relacion", data: updateTag });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const deleterelacionfromarticle = async (req, res) => {
  const { id, tagsid } = req.params;
  try {
    const deleteTag = await ArticleModels.findByIdAndUpdate(
      id,
      {
        $pull: { tags: tagsid },
      },
      { new: true }
    );
    res
      .status(200)
      .json({ ok: true, msg: "se añadio la relacion", data: deleteTag });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};
