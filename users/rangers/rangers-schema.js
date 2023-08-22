import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rangersSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: String,
  profileImage: String,
  backgroundImage: String,
  profileBio: String,
  role: {
    type: String,
    default: 'ranger'
  },
  parkId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'parks'
  },
  followers: [String],
  following: [String]
}, { collection: "rangers" });
export default rangersSchema;
