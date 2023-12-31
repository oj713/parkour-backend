import hikersModel from "./hikers-model.js";
import hikersStarter from "./hikers-starter.js";

export const findAllHikers = () =>
    hikersModel.find();

export const findHikerById = (id) =>
    hikersModel.findById(id);

export const findHikerByUsername = (username) =>
    hikersModel.findOne({ username });

export const findHikerByCredentials = (username, password) =>
    hikersModel.findOne({ username, password });

export const findHikerByDisplayName = (displayName) =>
    hikersModel.find({ displayName });

export const createHiker = (user) =>
    hikersModel.create(user);

export const updateHiker = (id, user) =>
    hikersModel.updateOne({ _id: id }, { $set: user });

export const deleteHiker = (id) => 
    hikersModel.deleteOne({_id: id});

export const deleteAllHikers = () =>
    hikersModel.deleteMany({})

export const addStarterHikers = () =>
    hikersModel.insertMany(hikersStarter);

