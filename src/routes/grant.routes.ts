import { Router } from "express";
import {
  deleteGrantByID,
  getAllGrants,
  getGrantByID,
  setGrant,
} from "../controllers/grants.controller.js";
export const grantRouter = Router();

grantRouter.route("/grants").get(getAllGrants).post(setGrant);
grantRouter.route("/grant/:id").get(getGrantByID).delete(deleteGrantByID);
