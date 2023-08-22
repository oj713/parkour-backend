import * as usersDao from './users-dao.js';

const UserController = (app) => {
  app.get('/api/users', findAllUsers)
}

const findAllUsers = async (req, res) => {
    const users = await usersDao.findAllUsers();
    res.json(users);
};

export default UserController