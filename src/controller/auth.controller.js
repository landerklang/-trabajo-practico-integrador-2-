import { UserModel } from "../models/user.model.js";
import { comparedPassword, hashPassword } from "../helpers/bcrypt.helpers.js";
import { generatorToken } from "../helpers/jwt.helpers.js";

export const register = async (req, res) => {
  const { username, gmail, password, role, profiler } = req.body;
  try {
    const hashedpassword = await hashPassword(password);
    const user = await UserModel.create({
      username: username,
      gmail: gmail,
      password: hashedpassword,
      role: role,
      profiler: profiler,
    });
    res.status(201).json({
      ok: true,
      msg: "se creo correctamenten el usuario",
      data: user,
    });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    // console.log(user);
    if (!user) {
      return res
        .status(400)
        .json({ msg: "el usuario o la contraseña es incorrecta" });
    }
    const corectpassword = await comparedPassword(password, user.password);
    if (!corectpassword) {
      return res
        .status(400)
        .json({ msg: "el usuario o la contraseña es incorrecta" });
    }

    const token = generatorToken({
      _id: user._id,
      username: user.username,
      role: user.role,
      firstName: user.profiler.firstName,
      lastName: user.profiler.lastName,
      biography: user.profiler.biography,
    });

    res.cookie("token", token, { httpOnly: true, maxAge: 1000 * 60 * 60 });
    return res.status(200).json({ ok: true, msg: "login con exito" });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const getprofile = async (req, res) => {
  try {
    return res.json({
      user: {
        _id: req.user._id,
        username: req.user.username,
        role: req.user.role,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        biography: req.user.biography,
      },
    });
  } catch (error) {
    // console.log(req.user);
    // console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};

export const updateprofile = async (req, res) => {
  const userId = req.user._id;
  const { profiler } = req.body;
  try {
    const update = await UserModel.findByIdAndUpdate(
      userId,
      { profiler: profiler },
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
    res.status(500).json({ ok: false, msg: "error interno del servidor" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ msg: "logout con exito" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ ok: false, msg: "error interno del servidor" });
  }
};
