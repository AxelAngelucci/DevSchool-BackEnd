import { Schema, model } from "mongoose";

const Social = new Schema({
    name: {
        type: String,
        required: [true, "Social link name is required"]
    },
    url: {
        type: String,
        required: [true, "Social link url is required"]
    }
});

const Language = new Schema({
    name: {
        type: String,
        required: [true, "Language name is required"]
    },
    certificateUrl: String
});


const User = new Schema({
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

export default model("users", User);