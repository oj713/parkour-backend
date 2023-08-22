import rangersModel from './rangers/rangers-model.js';
import rangersStarter from './rangers-starter.js'

export const findAllRangers = () => 
    rangersModel.find();

export const findRangerById = (id) => 
    rangersModel.findById(id);

export const findRangerHeaderById = (id) => 
    rangersModel.findById(id, {displayName: 1, profileImage: 1, username: 1, role: 1, parkId: 1})

export const findRangerByUsername = (username) =>
    rangersModel.findOne({ username });

export const findRangerByCredentials = (username, password) =>
    rangersModel.findOne({ username, password });

export const findRangersByPark = parkId =>
    rangersModel.find({ parkId });

export const findRangerByDisplayName = (displayName) =>
    rangersModel.find({ displayName });

export const createRanger = (user) =>
    rangersModel.create(user);

export const updateRanger = (id, user) =>
    rangersModel.updateOne({ _id: id }, { $set: user });

export const deleteRanger = (id) => 
    rangersModel.deleteOne({_id: id});

export const deleteAllRangers = () =>
    rangersModel.deleteMany({})

export const addStarterRangers = () => 
    rangersModel.insertMany(rangersStarter);
