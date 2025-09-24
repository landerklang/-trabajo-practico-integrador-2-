import { TagsModels } from "../models/tag.models.js";

export const createdTag = async (req, res) => {
  const { name, description } = req.body;
  try {
    const create = await TagsModels.create({
      name: name,
      description: description,
    });
    res
      .status(201)
      .json({ ok: true, msg: "se creó correctamente", data: create });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getAllTags = async (req, res) => {
  try {
    const User = await TagsModels.find();
    res.status(200).json({ ok: true, data: User });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getTagsByPk = async (req, res) => {
  const { id } = req.params;

  try {
    const userId = await TagsModels.findById(id).populate("Articles");
    if (!userId) {
      res.status(404).json({ ok: false, msg: "no se encontro al usuario" });
    } else {
      res.status(200).json({ ok: true, data: userId });
    }
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const updateTags = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const update = await TagsModels.findByIdAndUpdate(
      id,
      { name: name },
      { description: description },
      { new: true }
    );
    if (update) {
      res.status(200).json({ ok: true, data: update });
    } else {
      return res
        .status(404)
        .json({ ok: false, message: "no se encontro el perfil" });
    }
  } catch (error) {
    // console.log(error);
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};

export const deletedTags = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await TagsModels.findByIdAndDelete(id);
    res.status(200).json({
      ok: true,
      msg: "etiqueta eliminado correctamente",
      data: deleted,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "error interno del servidor",
    });
  }
};
