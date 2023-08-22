import mongoose from "mongoose";
const Schema = mongoose.Schema;

const hikersSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: String,
  profileImage: String,
  backgroundImage: String,
  profileBio: String,
  role: {
    type: String,
    default: 'hiker'
  },
  followers: [String],
  following: [String]
}, { collection: "hikers" });
export default hikersSchema;
