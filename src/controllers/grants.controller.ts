import { Request, Response } from "express";
import { serverError } from "../helpers/jsonErrors.js";
import { GrantI } from "../interfaces/grant.interface.js";
import Grant from "../models/Grant.js";

const setGrant = async (req: Request, res: Response) => {
  const { ...payload } = req.body;
  try {
    await Grant.create(payload);
    res.status(201).json({ message: "Grant created" });
  } catch (e) {
    return res.status(400).json({ message: "Grant Not Created", error: e });
  }
};

const getAllGrants = async (req: Request, res: Response) => {
  try {
    const allGrants: GrantI[] = await Grant.find();
    res.status(200).json({ ...allGrants });
  } catch (e) {
    serverError(res, e);
  }
};

const getGrantByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const grant: GrantI = await Grant.findOne({ id });
    res.status(200).json({ ...grant });
  } catch (e) {
    serverError(res, e);
  }
};

const deleteGrantByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Grant.findOneAndDelete({ id });
    res.status(200).json({ message: `Grant with ID ${id} has been deleted` });
  } catch (e) {
    serverError(res, e);
  }
};

export { setGrant, getAllGrants, getGrantByID, deleteGrantByID };
