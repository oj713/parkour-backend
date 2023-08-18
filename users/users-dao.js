import usersModel from "./users-model.js";
import usersStarter from './users-starter.json' assert {type: 'json'}

export const findAllUsers = () =>
    usersModel.find();

export const findUserById = (id) =>
    usersModel.findById(id);

export const findUserByUsername = (username) =>
    usersModel.findOne({ username });

export const findUserByCredentials = (username, password) =>
    usersModel.findOne({ username, password });

export const findUsersByRangerStation = (rangerStation) =>
    usersModel.find({ rangerStation });

export const findUserByDisplayName = (displayName) =>
    usersModel.find({ displayName });

export const createUser = (user) =>
    usersModel.create(user);

export const updateUser = (id, user) =>
    usersModel.updateOne({ _id: id }, { $set: user });

export const deleteUser = (id) => 
    usersModel.deleteOne({_id: id});

export const deleteAllUsers = () =>
    usersModel.deleteOne({_id: "64dee148d6f487396367c762"})

export const addStarterUsers = () => 
    usersModel.insertMany(usersStarter);