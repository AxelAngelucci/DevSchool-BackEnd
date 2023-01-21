"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundError = exports.serverError = void 0;
const serverError = (res, error) => {
    return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
    });
};
exports.serverError = serverError;
const notFoundError = (res, element) => {
    return res.status(404).json({
        message: `${element} not Found`,
    });
};
exports.notFoundError = notFoundError;
//# sourceMappingURL=jsonErrors.js.map