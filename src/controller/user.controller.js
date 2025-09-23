import { UserModel } from "../models/user.model.js";

export const getallUsers = async (req, res) => {
  try {
    const User = await UserModel.find().populate("Articles");
    res.status(200).json({ ok: true, data: User });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};
