import { UserModel } from "../models/user.model.js";
import { hashPassword } from "../helpers/bcrypt.helpers.js";

export const getallUsers = async (req, res) => {
  try {
    const User = await UserModel.find({ deletedAt: "null" }).populate(
      "Articles"
    );
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

  // console.log(gmail);
  try {
    const hashedpassword = await hashPassword(password);
    const update = await UserModel.findByIdAndUpdate(
      id,
      { username, gmail, password: hashedpassword },
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
    const deletesoft = await UserModel.findByIdAndUpdate(
      id,
      {
        $set: { deletedAt: new Date() },
      },
      { new: true }
    );
    console.log(id);
    res
      .status(200)
      .json({ ok: true, msg: "se elimino al usuario", data: deletesoft });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};
