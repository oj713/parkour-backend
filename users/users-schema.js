import mongoose from "mongoose";
const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: String,
  profileImage: String,
  backgroundImage: String,
  profileBio: String,
  role: {
    type: String,
    enum: ['Hiker', 'Ranger', 'Park'],
    default: 'Hiker'
  },
  rangerstation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  followers: [String],
  following: [String]
}, { collection: "users" });
export default usersSchema;
