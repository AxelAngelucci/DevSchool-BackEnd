import { Schema, model } from "mongoose";


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

const ModuleClasses = new Schema({
    name: {
        type: String,
        required: [true, "The module name is required"]
    },
    classes: [Class]
})

export default model("module-classes", ModuleClasses);