import * as usersDao from './users-dao.js';

const AuthController = (app) => {
    app.post("/api/users/register", register)
    app.post("/api/users/login", login)
    app.post("/api/users/profile", profile)
    app.post("/api/users/logout", logout)
}

const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
        const user = await usersDao.findUserByCredentials(username, password)
        if (user) {
            req.session["currentUser"] = user
            res.json(user)
        } else {
            res.sendStatus(403)
        }
    } else {
        res.sendStatus(403)
    }
}

const register = async (req, res) => {
    const username = req.body.username;
    const user = await usersDao.findUserByUsername(username)
    if (user) {
        res.sendStatus(404)
        return
    } else {
        const newUser = await usersDao.createUser(req.body)
        req.session['currentUser'] = newUser // store user in current session
        res.json(newUser) // return user
    }
}

const profile = (req, res) => {

        const currentUser = req.session["currentUser"]
        if (!currentUser) {
            res.sendStatus(404)
            return
        }
        res.json(currentUser)
}
const logout = (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
}

export default AuthController