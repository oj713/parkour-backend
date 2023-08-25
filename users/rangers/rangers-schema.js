import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rangersSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId },
  role: { type: String, enum: ['rangers'], default: 'rangers' },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: String,
  profileImage: {type: String, default: "https://media.defense.gov/2016/Sep/15/2001634865/-1/-1/0/160902-A-CE999-440.JPG"},
  backgroundImage: {type: String, 
    default: "https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg"},
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
