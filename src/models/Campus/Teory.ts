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

const Class = new Schema({
    link: {
        type: String,
        required: [true, "The url is required"]
    },
    title: {
        type: String,
        required: [true, "The title is required"],
    },
    date: {
        type: String,
        required: [true, "The Date is required"],
    },
    number: {
        type: Number,
        required: [true, "The Class Number is required"]
    }
});

const ModuleTeory = new Schema({
    name: {
        type: String,
        required: [true, "The module name is required"]
    },
    lessons: [Lesson]
});

const ModuleClasses = new Schema({
    name: {
        type: String,
        required: [true, "The module name is required"]
    },
    classes: [Class]
})



export default model("module-teory", ModuleTeory);

