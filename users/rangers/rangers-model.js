import mongoose from "mongoose";
import rangersSchema from "./rangers-schema.js";
const rangersModel = mongoose.model("rangers", rangersSchema);
export default rangersModel;