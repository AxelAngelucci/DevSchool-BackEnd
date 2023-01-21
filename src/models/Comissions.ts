import { Schema, model } from "mongoose";

const Comission = new Schema({
  startDate: {
    type: String,
    required: [true, "Start date is required"],
  },
  duration: {
    type: String,
    required: [true, "Duration is required"],
  },
  schedule: {
    type: String,
    required: [true, "Schedule is required"],
  },
  month: {
    type: Number,
    required: [true, "Month is required"],
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
});

export default model("commisions", Comission);
