import parksModel from './parks/parks-model.js';

export const findAllParks = () =>
    parksModel.find();

export const findParkById = (id) => 
    parksModel.findById(id);

export const findParkByUsername = (username) =>
    parksModel.findOne({ username });

export const findParkByCredentials = (username, password) =>
    parksModel.findOne({ username, password });

export const findParkByDisplayName = (displayName) =>
    parksModel.find({ displayName });

export const createPark = (user) =>
    parksModel.create(user);

export const updatePark = (id, user) =>
    parksModel.updateOne({ _id: id }, { $set: user });

export const deletePark = (id) => 
    parksModel.deleteOne({_id: id});

export const deleteAllParks = () =>
    parksModel.deleteMany({})

export const addStarterParks = () => 
    parksModel.insertMany(parksStarter);

export const findParksHeaders = () => 
    parksModel.find({role: 'park'}, {displayName: 1, profileImage: 1, username: 1})