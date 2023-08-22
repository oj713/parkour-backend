import * as parksDao from './parks-dao.js';

const ParksController = (app) => {
  app.get('/api/parks', findAllParks)
  app.get('/api/parks/:id', findParkById);
  app.post('/api/parks', createPark);
  app.delete('/api/parks/:id', deletePark);
  app.put('/api/parks/:id', updatePark);
  app.get('/api/parks/rest', resetParks);
  app.get('/api/parks/headers', findParksHeaders);
}

const createPark = async (req, res) => {
  const newPark = await parksDao.createPark(req.body);
  res.json(newPark);
};

const deletePark = async (req, res) => {
  const id = req.params.id;
  const status = await parksDao.deletePark(id);
  res.json(status);
};

const updatePark = async (req, res) => {
  const id = req.params.id;
  const status = await parksDao.updatePark(id, req.body);
  const park = await parksDao.findParkById(id);
  req.session["currentUser"] = park;
  res.json(status);
};

const findParkById = async (req, res) => {
  const id = req.params.id;
  const park = await parksDao.findParkById(id);
  res.json(park);
};

const findAllParks = async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const displayName = req.query.displayName;
  if (username && password) {
    const park = await parksDao.findParkByCredentials(username, password);
    if (park) {
      res.json(park);
    } else {
      res.sendStatus(404);
    }
  } else if (username) {
    const park = await parksDao.findParkByUsername(username);
    if (park) {
      res.json(park);
    } else {
      res.sendStatus(404);
    }
  }
  else if (displayName) {
    const park = await parksDao.findParkByDisplayName(displayName);
    if (park) {
      res.json(park);
    } else {
      res.sendStatus(404);
    }
  } else {
    const parks = await parksDao.findAllParks();
    res.json(parks);
  }
};

const resetParks = async (req, res) => {
  const status = await parksDao.deleteAllParks();
  const status2 = await parksDao.addStarterParks();
  res.sendStatus(200);
}

const findParksHeaders = async (req, res) => {
  const parks = await parksDao.findParksHeaders();
  res.json(parks);
}

export default ParksController