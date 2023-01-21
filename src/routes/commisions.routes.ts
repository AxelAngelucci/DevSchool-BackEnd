import {Router} from "express";
import { deleteCommisionByID, getAllComissions, getCommisionByID, putComissionByID, setComission } from "../controllers/commisions.controller";

export const commisionsRouter = Router();

commisionsRouter
    .route("/commisions")
    .get(getAllComissions)
    .post(setComission);
    
commisionsRouter
    .route("/commisions/:id")
    .get(getCommisionByID)
    .put(putComissionByID)
    .delete(deleteCommisionByID);
