import mongoose from "mongoose";
const postsSchema = new mongoose.Schema({
    userId: {
        type: {
            type: String,
            enum: ['rangers', 'hikers']
        },
        item: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'userId.type'
        },
        required:true
    },
    parkId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'parks'
    },
    text: {type: String, required: true},
    datePosted: { type: Date, default: Date.now, required: true },
    location: String,
    attachment: String,
    likes: [{
        type: {
            type: String, 
            enum: ['rangers', 'hikers']
        },
        item: { 
            type: mongoose.Schema.Types.ObjectId, 
            refPath: 'likes.type'
        }}], // list of ids of users who liked this post
    numRangerLikes: {type: Number, default: 0}
}, { collection: "posts" });
export default postsSchema;