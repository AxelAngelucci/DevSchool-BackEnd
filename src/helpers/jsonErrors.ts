import { Response } from "express";

export const serverError = (res: Response, error: any) => {
  return res.status(500).json({
    message: "Internal Server Error",
    error: error.message,
  });
};

export const notFoundError = (res: Response, element: string) => {
  return res.status(404).json({
    message: `${element} not Found`,
  });
};
