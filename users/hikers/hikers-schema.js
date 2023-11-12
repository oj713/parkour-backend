import mongoose from "mongoose";
const Schema = mongoose.Schema;

const hikersSchema = new mongoose.Schema({
  //_id: { type: Schema.Types.ObjectId },
  role: { type: String, enum: ['hikers'], default: 'hikers'},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: String,
  profileImage: {type: String, 
    default: "https://media.istockphoto.com/id/174667789/photo/shoe-boot-footprint-desert-soil-hiking-athlete.jpg?s=612x612&w=0&k=20&c=dmFJ3ND2jnTQOH6utcxzwf8nmje46z_tFGGYY_9Kz_A="},
  backgroundImage: {type: String, 
    default: "https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg"},
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
