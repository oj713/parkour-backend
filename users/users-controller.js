import * as usersDao from './users-dao.js';

const UserController = (app) => {
  app.get('/api/users', findAllUsers)
  app.get('/api/users/:uid', findUserById);
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateUser);
  app.get('/api/usersreset', resetUsers);
}

const createUser = async (req, res) => {
  const newUser = await usersDao.createUser(req.body);
  res.json(newUser);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const status = await usersDao.deleteUser(id);
  res.json(status);
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const status = await usersDao.updateUser(id, req.body);
  const user = await usersDao.findUserById(id);
  req.session["currentUser"] = user;
  res.json(status);
};

const findUserById = async (req, res) => {
  const id = req.params.id;
  const user = await usersDao.findUserById(id);
  res.json(user);
};

const findAllUsers = async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const rangerStation = req.query.rangerStation;
  const displayName = req.query.displayName;
  if (username && password) {
    const user = await usersDao.findUserByCredentials(username, password);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  } else if (username) {
    const user = await usersDao.findUserByUsername(username);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  }
  else if (displayName) {
    const user = await usersDao.findUserByDisplayName(displayName);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  }
  else if (rangerStation) {
    const users = await usersDao.findUsersByRangerStation(rangerStation);
    if (users) {
      res.json(users);
    } else {
      res.sendStatus(404);
    }
  } else {
    const users = await usersDao.findAllUsers();
    res.json(users);
  }
};

const resetUsers = async (req, res) => {
  const status = await usersDao.deleteAllUsers();
  const status2 = await usersDao.addStarterUsers();
  res.sendStatus(200);
}

export default UserController