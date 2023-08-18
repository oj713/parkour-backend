import postsModel from "./posts-model.js";
import postsStarter from './posts-starter.json' assert {type: 'json'}

export const findAllPosts = () =>
    postsModel.find();

export const findPostById = (id) =>
    postsModel.findById(id);

export const findPostsByParkId = (parkId) =>
    postsModel.find({ parkId })

export const createPost = (post) =>
    postsModel.create(post);

export const updatePost = (id, post) =>
    postsModel.updateOne({ _id: id }, { $set: post });

export const deletePost = (id) => 
    postsModel.deleteOne({_id: id});

export const deleteAllPosts = () =>
    postsModel.deleteMany({});

export const addStarterPosts = () => 
    postsModel.insertMany(postsStarter);