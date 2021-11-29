import bcrypt from "bcrypt";

export const hashpassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};
export const comparePassword = (password, hash) => {};
