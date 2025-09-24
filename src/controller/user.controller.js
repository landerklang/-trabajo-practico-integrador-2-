import { UserModel } from "../models/user.model.js";
import { hashPassword } from "../helpers/bcrypt.helpers.js";

export const getallUsers = async (req, res) => {
  try {
    const User = await UserModel.find().populate("Articles");
    res.status(200).json({ ok: true, data: User });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getUserByPk = async (req, res) => {
  const { id } = req.params;

  try {
    const userId = await UserModel.findById(id)
      .populate("Articles")
      .populate("Comments");
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

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, gmail } = req.body;
  try {
    const hashedpassword = await hashPassword(password);
    const update = await UserModel.findByIdAndUpdate(
      id,
      { username: username },
      { gmail: gmail },
      { password: hashedpassword },
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

export const deletedUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await UserModel.findByIdAndDelete(id);
    res.status(200).json({
      ok: true,
      msg: "usuario eliminado correctamente",
      data: deleted,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "error interno del servidor",
    });
  }
};
