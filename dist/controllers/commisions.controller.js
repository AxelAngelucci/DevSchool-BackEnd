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
exports.putComissionByID = exports.deleteCommisionByID = exports.getCommisionByID = exports.getAllComissions = exports.setComission = void 0;
const jsonErrors_js_1 = require("../helpers/jsonErrors.js");
const Comissions_js_1 = __importDefault(require("../models/Comissions.js"));
const setComission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = __rest(req.body, []);
    try {
        yield Comissions_js_1.default.create(payload);
        res.status(201).json({ message: "Commision created" });
    }
    catch (e) {
        return res.status(400).json({ message: "Commision Not Created", error: e });
    }
});
exports.setComission = setComission;
const getAllComissions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commisions = yield Comissions_js_1.default.find();
        res.status(201).json(Object.assign({}, commisions));
    }
    catch (e) {
        return (0, jsonErrors_js_1.serverError)(res, e);
    }
});
exports.getAllComissions = getAllComissions;
const getCommisionByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const commision = yield Comissions_js_1.default.findOne({ _id: id });
        res.status(200).json(Object.assign({}, commision));
    }
    catch (e) {
        (0, jsonErrors_js_1.serverError)(res, e);
    }
});
exports.getCommisionByID = getCommisionByID;
const deleteCommisionByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield Comissions_js_1.default.findOneAndDelete({ _id: id });
        res
            .status(200)
            .json({ message: `Comission with ID ${id} has been deleted` });
    }
    catch (e) {
        (0, jsonErrors_js_1.serverError)(res, e);
    }
});
exports.deleteCommisionByID = deleteCommisionByID;
const putComissionByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const payload = __rest(req.body, []);
    try {
        const commision = yield Comissions_js_1.default.findOneAndUpdate({ _id: id }, payload);
        if (!commision)
            return (0, jsonErrors_js_1.notFoundError)(res, "Job");
        return res.status(200).json({
            message: `Commision with id ${id} has been updated`,
            id: commision._id,
            commision,
        });
    }
    catch (e) {
        return (0, jsonErrors_js_1.serverError)(res, e);
    }
});
exports.putComissionByID = putComissionByID;
//# sourceMappingURL=commisions.controller.js.map