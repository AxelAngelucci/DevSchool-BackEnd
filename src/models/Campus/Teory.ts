import { Schema, model } from "mongoose";

const Lesson = new Schema({
    type: {
        type: String,
        required: [true, "Start date is required"],
        enum: ["RESOURCE", "VIDEO", "URL"]
    },
    link: {
        type: String,
        required: [true, "The url is required"]
    },
    title: {
        type: String,
        required: [true, "The title is required"],
    },
    description: String
});

const ModuleTeory = new Schema({
    name: {
        type: String,
        required: [true, "The module name is required"]
    },
    lessons: [Lesson]
});



export default model("module-teory", ModuleTeory);

