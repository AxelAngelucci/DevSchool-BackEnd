import { Schema, model } from "mongoose";

const GrantSchema = new Schema({
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

export default model("grants", GrantSchema);
