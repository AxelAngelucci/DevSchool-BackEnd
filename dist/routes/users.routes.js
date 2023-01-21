"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
exports.usersRouter = (0, express_1.Router)();
exports.usersRouter
    .route("/users")
    .get(users_controller_1.getAllUsers)
    .post(users_controller_1.newUser);
exports.usersRouter
    .route("/users/:id")
    .get(users_controller_1.getUserByID)
    .put(users_controller_1.putUserByID)
    .delete(users_controller_1.deleteUserByID);
exports.usersRouter
    .route("/users/:id/show-table")
    .delete(users_controller_1.showUserInTable);
//# sourceMappingURL=users.routes.js.map