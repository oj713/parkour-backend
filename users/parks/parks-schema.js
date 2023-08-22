import mongoose from "mongoose";
const Schema = mongoose.Schema;

const parksSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: String,
  profileImage: String,
  backgroundImage: String,
  profileBio: String,
  role: {
    type: String,
    default: 'park'
  },
  followers: [String]
}, { collection: "parks" });
export default parksSchema;