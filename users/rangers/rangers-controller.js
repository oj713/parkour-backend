import * as rangersDao from './rangers-dao.js';

const RangersController = (app) => {
  app.get('/api/rangers', findAllRangers)
  app.get('/api/rangers/:id', findRangerById);
  app.get('/api/rangers/header/:id', findRangerHeaderById);
  app.post('/api/rangers', createRanger);
  app.delete('/api/rangers/:id', deleteRanger);
  app.put('/api/rangers/:id', updateRanger);
  app.get('/api/rangersreset', resetRangersWrapper);
}


const createRanger = async (req, res) => {
  const newRanger = await rangersDao.createRanger(req.body);
  res.json(newRanger);
};

const deleteRanger = async (req, res) => {
  const id = req.params.id;
  const status = await rangersDao.deleteRanger(id);
  res.json(status);
};

const updateRanger = async (req, res) => {
  const id = req.params.id;
  const status = await rangersDao.updateRanger(id, req.body);
  const ranger = await rangersDao.findRangerById(id);
  req.session["currentUser"] = ranger;
  res.json(status);
};

const findRangerById = async (req, res) => {
  const id = req.params.id;
  const ranger = await rangersDao.findRangerById(id);
  res.json(ranger);
};

const findRangerHeaderById = async (req, res) => {
  const id = req.params.id;
  const rangerHeader = await rangersDao.findRangerHeaderById(id);
  res.json(rangerHeader);
}

const findAllRangers = async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const parkId = req.query.parkId;
  const displayName = req.query.displayName;
  if (username && password) {
    const ranger = await rangersDao.findRangerByCredentials(username, password);
    if (ranger) {
      res.json(ranger);
    } else {
      res.sendStatus(404);
    }
  } else if (username) {
    const ranger = await rangersDao.findRangerByUsername(username);
    if (ranger) {
      res.json(ranger);
    } else {
      res.sendStatus(404);
    }
  }
  else if (displayName) {
    const ranger = await rangersDao.findRangerByDisplayName(displayName);
    if (ranger) {
      res.json(ranger);
    } else {
      res.sendStatus(404);
    }
  }
  else if (parkId) {
    const rangers = await rangersDao.findRangersByPark(parkId);
    if (rangers) {
      res.json(rangers);
    } else {
      res.sendStatus(404);
    }
  } else {
    const rangers = await rangersDao.findAllRangers();
    res.json(rangers);
  }
};

const resetRangersWrapper = async (req, res) => {
  const status = await resetRangers(req, res);
  res.sendStatus(status);
}

export const resetRangers = async (req, res) => {
  const status = await rangersDao.deleteAllRangers();
  const status2 = await rangersDao.addStarterRangers();
  return 200;
}

export default RangersController