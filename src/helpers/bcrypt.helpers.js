import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const comparedPassword = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};
