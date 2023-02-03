"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchPass = exports.hashPass = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const hashPass = (password) => {
    const salt = bcryptjs_1.default.genSaltSync(10);
    const hash = bcryptjs_1.default.hashSync(password, salt);
    return hash;
};
exports.hashPass = hashPass;
const matchPass = (hash, password) => {
    const match = bcryptjs_1.default.compareSync(password, hash);
    return match;
};
exports.matchPass = matchPass;
//# sourceMappingURL=passEncrypt.js.map