import { Request, Response } from "express";
import { serverError, notFoundError } from "../helpers/jsonErrors.js";
import { CommisionI } from "../interfaces/commision.interface.js";
import Comissions from "../models/Comissions.js";

const setComission = async (req: Request, res: Response) => {
  const { ...payload } = req.body;
  try {
    await Comissions.create(payload);
    res.status(201).json({ message: "Commision created" });
  } catch (e) {
    return res.status(400).json({ message: "Commision Not Created", error: e });
  }
};

const getAllComissions = async (req: Request, res: Response) => {
  try {
    const commisions: CommisionI[] = await Comissions.find();
    res.status(201).json({ ...commisions });
  } catch (e) {
    return serverError(res, e);
  }
};

const getCommisionByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const commision: CommisionI = await Comissions.findOne({ _id: id });
    res.status(200).json({ ...commision });
  } catch (e) {
    serverError(res, e);
  }
};

const deleteCommisionByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Comissions.findOneAndDelete({ _id: id });
    res
      .status(200)
      .json({ message: `Comission with ID ${id} has been deleted` });
  } catch (e) {
    serverError(res, e);
  }
};

const putComissionByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...payload } = req.body;
  try {
    const commision: CommisionI = await Comissions.findOneAndUpdate(
      { _id: id },
      payload
    );
    if (!commision) return notFoundError(res, "Job");
    return res.status(200).json({
      message: `Commision with id ${id} has been updated`,
      id: commision._id,
      commision,
    });
  } catch (e) {
    return serverError(res, e);
  }
};

export {
  setComission,
  getAllComissions,
  getCommisionByID,
  deleteCommisionByID,
  putComissionByID,
};
