import mongoose from "mongoose";
const Schema = mongoose.Schema;

const parksSchema = new mongoose.Schema({
  //_id: { type: Schema.Types.ObjectId },
  role: { type: String, enum: ['parks'], default: 'parks' },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: String,
  profileImage: {type: String, 
    default: "https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg"},
  profileBio: String,
  // unique to Parks
  blockedTerms: [String],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hikers'
  }]
}, { collection: "parks" });
export default parksSchema;