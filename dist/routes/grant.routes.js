"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grantRouter = void 0;
const express_1 = require("express");
const grants_controller_js_1 = require("../controllers/grants.controller.js");
exports.grantRouter = (0, express_1.Router)();
exports.grantRouter.route("/grants").get(grants_controller_js_1.getAllGrants).post(grants_controller_js_1.setGrant);
exports.grantRouter.route("/grant/:id").get(grants_controller_js_1.getGrantByID).delete(grants_controller_js_1.deleteGrantByID);
//# sourceMappingURL=grant.routes.js.map