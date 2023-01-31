import bcrypt from "bcryptjs";

export const hashPass = (password: string) => {
  const salt:any = bcrypt.genSaltSync(10);
  const hash:any = bcrypt.hashSync(password, salt);
  return hash;
};

export const matchPass = (hash:any, password:any) => {
  const match = bcrypt.compareSync(password, hash);
  return match;
};
