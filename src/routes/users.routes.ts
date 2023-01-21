import { Router } from "express";
import { deleteUserByID, getAllUsers, getUserByID, newUser, putUserByID, showUserInTable } from "../controllers/users.controller";
export const usersRouter = Router();

usersRouter
    .route("/users")
    .get(getAllUsers)
    .post(newUser);

usersRouter
    .route("/users/:id")
    .get(getUserByID)
    .put(putUserByID)
    .delete(deleteUserByID);
    
usersRouter
    .route("/users/:id/show-table")
    .delete(showUserInTable);