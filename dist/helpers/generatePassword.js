"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatedPass = void 0;
const generate_password_1 = require("generate-password");
exports.generatedPass = (0, generate_password_1.generate)({
    length: 8,
    numbers: true,
});
//# sourceMappingURL=generatePassword.js.map