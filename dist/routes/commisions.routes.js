"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commisionsRouter = void 0;
const express_1 = require("express");
const commisions_controller_1 = require("../controllers/commisions.controller");
exports.commisionsRouter = (0, express_1.Router)();
exports.commisionsRouter
    .route("/commisions")
    .get(commisions_controller_1.getAllComissions)
    .post(commisions_controller_1.setComission);
exports.commisionsRouter
    .route("/commisions/:id")
    .get(commisions_controller_1.getCommisionByID)
    .put(commisions_controller_1.putComissionByID)
    .delete(commisions_controller_1.deleteCommisionByID);
//# sourceMappingURL=commisions.routes.js.map