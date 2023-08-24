import mongoose from "mongoose";
const Schema = mongoose.Schema;

const hikersSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId },
  role: { type: String, enum: ['hikers'], default: 'hikers'},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: String,
  profileImage: String,
  backgroundImage: String,
  profileBio: String,
  likedPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'posts'
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hikers'
  }],
  // unique to hikers
  following: [{
    role: {
      type: String,
      enum: ['parks', 'rangers', 'hikers']
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'following.role'
    }
  }]
}, { collection: "hikers" });
export default hikersSchema;
