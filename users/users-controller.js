import * as usersDao from './users-dao.js';

const UsersController = (app) => {
  app.get('/api/users', findAllUsers)
  app.get('/api/users/:id', findUserById);
}

const findUserById = async (req, res) => {
  const id = req.params.id;
  const user = await usersDao.findUserById(id);
  res.json(user);
};

const findAllUsers = async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
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
  } else {
    const users = await usersDao.findAllUsers();
    res.json(users);
  }
};

export default UsersController