import mongoose from "mongoose";
const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  role: {
    type: String,
    enum: ['Hiker', 'Ranger', 'Admin'],
    default: 'Hiker'
  },
  followers: [String],
  following: [String]
}, { collection: "users" });
export default usersSchema;
