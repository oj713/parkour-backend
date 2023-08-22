import * as hikersDao from './hikers-dao.js';

const hikersController = (app) => {
  app.get('/api/hikers', findAllHikers)
  app.get('/api/hikers/:id', findHikerById);
  app.post('/api/hikers', createHiker);
  app.delete('/api/hikers/:id', deleteHiker);
  app.put('/api/hikers/:id', updateHiker);
  app.get('/api/hikers/reset', resetHikers);
}

const createHiker = async (req, res) => {
  const newHiker = await hikersDao.createHiker(req.body);
  res.json(newHiker);
};

const deleteHiker = async (req, res) => {
  const id = req.params.id;
  const status = await hikersDao.deleteHiker(id);
  res.json(status);
};

const updateHiker = async (req, res) => {
  const id = req.params.id;
  const status = await hikersDao.updateHiker(id, req.body);
  const hiker = await hikersDao.findHikerById(id);
  req.session["currentHiker"] = hiker;
  res.json(status);
};

const findHikerById = async (req, res) => {
  const id = req.params.id;
  const hiker = await hikersDao.findHikerById(id);
  res.json(hiker);
};

const findAllHikers = async (req, res) => {
  const username = req.query.userername;
  const password = req.query.password;
  const displayName = req.query.displayName;
  if (username && password) {
    const hiker = await hikersDao.findHikerByCredentials(username, password);
    if (hiker) {
      res.json(hiker);
    } else {
      res.sendStatus(404);
    }
  } else if (username) {
    const hiker = await hikersDao.findHikerByUsername(username);
    if (hiker) {
      res.json(hiker);
    } else {
      res.sendStatus(404);
    }
  }
  else if (displayName) {
    const hiker = await hikersDao.findHikerByDisplayName(displayName);
    if (hiker) {
      res.json(hiker);
    } else {
      res.sendStatus(404);
    }
  } else {
    const hikers = await hikersDao.findAllHikers();
    res.json(hikers);
  }
};

const resetHikers = async (req, res) => {
  const status = await hikersDao.deleteAllHikers();
  const status2 = await hikersDao.addStarterHikers();
  res.sendStatus(200);
}

export default hikersController