import mongoose from "mongoose";
const postsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required:true
    },
    parkId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {type: String, required: true},
    datePosted: { type: Date, default: Date.now, required: true },
    location: String,
    attachment: String,
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'users'}], // list of ids of users who liked this post
    likedByPark: {type: Boolean, default: false}
}, { collection: "posts" });
export default postsSchema;