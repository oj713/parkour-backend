import parksModel from './parks/parks-model.js';
import hikersModel from './hikers/hikers-model.js';
import rangersModel from './rangers/rangers-model.js';

export const findAllUsers = () => {
    const parks =  parksModel.find();
    const hikers = hikersModel.find();
    const rangers = rangersModel.find();
    return [...parks, ...hikers, ...rangers];
}