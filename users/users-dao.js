import parksModel from './parks/parks-model.js';
import hikersModel from './hikers/hikers-model.js';
import rangersModel from './rangers/rangers-model.js';

export const findAllUsers = async () => {
    const parks =  await parksModel.find();
    const hikers = await hikersModel.find();
    const rangers = await rangersModel.find();
    return [...parks, ...hikers, ...rangers];
}

export const findUserById = async (id) => {
    const park = await parksModel.findById(id);
    const hiker = await hikersModel.findById(id);
    const ranger = await rangersModel.findById(id);
    if (park) {
        return park;
    } else if (hiker) {
        return hiker;
    } else {
        return ranger;
    }
}

export const findUserByUsername = async (username) => {
    const park = await parksModel.findOne({ username });
    const hiker = await hikersModel.findOne({ username }); 
    const ranger = await rangersModel.findOne({ username });
    if (park) {
        return park;
    } else if (hiker) {
        return hiker;
    } else {
        return ranger;
    }
}

export const findUserByCredentials = async (username, password) => {
    const park = await parksModel.findOne({ username, password });
    const hiker = await hikersModel.findOne({ username, password });
    const ranger = await rangersModel.findOne({ username, password });
    if (park) {
        return park;
    } else if (hiker) {
        return hiker;
    } else {
        return ranger;
    }
}

export const findUserByDisplayName = async (displayName) => {
    const parks = await parksModel.find({ displayName });
    const hikers = await hikersModel.find({ displayName });
    const rangers = await rangersModel.find({ displayName });
    return [...parks, ...hikers, ...rangers];
}
