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
exports.showUserInTable = exports.deleteUserByID = exports.putUserByID = exports.getUserByID = exports.getAllUsers = exports.newUser = void 0;
const jsonErrors_js_1 = require("../helpers/jsonErrors.js");
const Users_js_1 = __importDefault(require("../models/Users.js"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = __rest(req.body, []);
    try {
        yield Users_js_1.default.create(payload);
        res.status(201).json({ message: "User Created" });
    }
    catch (e) {
        return res.status(400).json({ message: "User Not Created", error: e });
    }
});
exports.newUser = newUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield Users_js_1.default.find();
        res.status(201).json(Object.assign({}, users));
    }
    catch (e) {
        return (0, jsonErrors_js_1.serverError)(res, e);
    }
});
exports.getAllUsers = getAllUsers;
const getUserByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield Users_js_1.default.findOne({ _id: id });
        res.status(200).json(Object.assign({}, user));
    }
    catch (e) {
        (0, jsonErrors_js_1.serverError)(res, e);
    }
});
exports.getUserByID = getUserByID;
const putUserByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const payload = __rest(req.body, []);
    try {
        const user = yield Users_js_1.default.findOneAndUpdate({ _id: id }, payload);
        if (!user)
            return (0, jsonErrors_js_1.notFoundError)(res, "User");
        return res.status(200).json({
            message: `User with id ${id} has been updated`,
            id: user._id,
            user
        });
    }
    catch (e) {
        return (0, jsonErrors_js_1.serverError)(res, e);
    }
});
exports.putUserByID = putUserByID;
const deleteUserByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield Users_js_1.default.findOneAndDelete({ _id: id });
        res
            .status(200)
            .json({ message: `User with ID ${id} has been deleted` });
    }
    catch (e) {
        (0, jsonErrors_js_1.serverError)(res, e);
    }
    ;
});
exports.deleteUserByID = deleteUserByID;
const showUserInTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield Users_js_1.default.findOne({ _id: id });
        if (!user)
            return (0, jsonErrors_js_1.notFoundError)(res, "User");
        yield Users_js_1.default.findByIdAndUpdate({ _id: id }, { showInTable: !user.showInTable });
        res.status(200).json({ message: `User with ID ${id} has been updated` });
    }
    catch (e) {
        (0, jsonErrors_js_1.serverError)(res, e);
    }
    ;
});
exports.showUserInTable = showUserInTable;
//# sourceMappingURL=users.controller.js.map