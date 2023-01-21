"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GrantSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    country: String,
    province: String,
    phone: String,
    cv: String,
    description: String,
});
exports.default = (0, mongoose_1.model)("grants", GrantSchema);
//# sourceMappingURL=Grant.js.map