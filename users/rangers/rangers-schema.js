import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rangersSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId },
  role: { type: String, enum: ['rangers'], default: 'rangers' },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: String,
  profileImage: String,
  backgroundImage: String,
  profileBio: String,
  // ParkId is unique to rangers
  parkId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'parks'
  },
  likedPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'posts'
  }], 
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hikers'
  }]
}, { collection: "rangers" });
export default rangersSchema;
