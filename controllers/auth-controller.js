import * as usersDao from "../models/users-dao.js";

const AuthController = (app) => {
    const register = (req, res) => {
        const username = req.body.username;
        const user = usersDao.findUserByUsername(username);
        if (user) {
            res.sendStatus(409);
            return;
        }
        const newUser = {...req.body, _id: (new Date()).getTime()+''}
        usersDao.createUser(newUser);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };

    const login = (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = usersDao.findUserByCredentials(username, password);
        if (user) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    };

    const profile = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
          res.sendStatus(404);
          return;
        }
        res.json(currentUser);
      };
     
      const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
      };
     
    const update = (req, res) => {
        const updates = req.body;
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
          res.sendStatus(404);
          return;
        }
        if (currentUser._id !== updates._id) {
          res.sendStatus(403);
          return;
        }
        const updatedUser = usersDao.updateUser(updates._id, updates);
        req.session["currentUser"] = updatedUser;
        res.json(updatedUser);
    };

    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.post("/api/users/profile", profile);
    app.post("/api/users/logout", logout);
    app.put("/api/users", update);
};
export default AuthController;