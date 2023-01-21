"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGrantByID = exports.getGrantByID = exports.getAllGrants = exports.setGrant = void 0;
const jsonErrors_js_1 = require("../helpers/jsonErrors.js");
const Grant_js_1 = __importDefault(require("../models/Grant.js"));
const setGrant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = __rest(req.body, []);
    try {
        yield Grant_js_1.default.create(payload);
        res.status(201).json({ message: "Grant created" });
    }
    catch (e) {
        return res.status(400).json({ message: "Grant Not Created", error: e });
    }
});
exports.setGrant = setGrant;
const getAllGrants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allGrants = yield Grant_js_1.default.find();
        res.status(200).json(Object.assign({}, allGrants));
    }
    catch (e) {
        (0, jsonErrors_js_1.serverError)(res, e);
    }
});
exports.getAllGrants = getAllGrants;
const getGrantByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const grant = yield Grant_js_1.default.findOne({ id });
        res.status(200).json(Object.assign({}, grant));
    }
    catch (e) {
        (0, jsonErrors_js_1.serverError)(res, e);
    }
});
exports.getGrantByID = getGrantByID;
const deleteGrantByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield Grant_js_1.default.findOneAndDelete({ id });
        res.status(200).json({ message: `Grant with ID ${id} has been deleted` });
    }
    catch (e) {
        (0, jsonErrors_js_1.serverError)(res, e);
    }
});
exports.deleteGrantByID = deleteGrantByID;
//# sourceMappingURL=grants.controller.js.map