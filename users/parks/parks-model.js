import mongoose from "mongoose";
import parksSchema from "./parks-schema.js";
const parksModel = mongoose.model("parks", parksSchema);
export default parksModel;