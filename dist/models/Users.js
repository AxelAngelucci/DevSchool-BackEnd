"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Social = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Social link name is required"]
    },
    url: {
        type: String,
        required: [true, "Social link url is required"]
    }
});
const Language = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Language name is required"]
    },
    certificateUrl: String
});
const User = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"]
    },
    location: {
        type: String,
        required: [true, "Location is required"]
    },
    description: String,
    socialNetworks: [Social],
    languages: [Language],
    technicalSkills: [String],
    softSkills: [String],
    otherSkills: [String],
    background: String,
    cv: String,
    showInTable: {
        type: Boolean,
        default: false
    }
});
exports.default = (0, mongoose_1.model)("users", User);
//# sourceMappingURL=Users.js.map