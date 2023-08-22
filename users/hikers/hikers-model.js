import mongoose from "mongoose";
import hikersSchema from "./hikers-schema.js";
const hikersModel = mongoose.model("hikers", hikersSchema);
export default hikersModel;