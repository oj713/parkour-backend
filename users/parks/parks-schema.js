import mongoose from "mongoose";
const Schema = mongoose.Schema;

const parksSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId },
  role: { type: String, enum: ['parks'], default: 'parks' },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: String,
  profileImage: String,
  profileBio: String,
  // unique to Parks
  blockedTerms: [String],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hikers'
  }]
}, { collection: "parks" });
export default parksSchema;