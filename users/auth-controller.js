import * as parksDao from "./parks/parks-dao.js"
import * as hikersDao from "./hikers/hikers-dao.js"
import * as rangersDao from "./rangers/rangers-dao.js"

const AuthController = (app) => {
    app.post("/api/users/register", register)
    app.post("/api/users/login", login)
    app.post("/api/users/profile", profile)
    app.post("/api/users/logout", logout)
}

const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;
    if (username && password) {
        let user;
        switch (role) {
            case "hiker":
                user = await hikersDao.findHikerByCredentials(username, password);
                break;
            case "park":
                user = await parksDao.findParkByCredentials(username, password);
                break;
            case "ranger":
                user = await rangersDao.findRangerByCredentials(username, password);
                break;
            default:
                break;
        }
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
    const role = req.body.role;
    let user;
    switch (role) {
        case "hiker":
            user = await hikersDao.findHikerByUsername(username);
            break;
        case "park":
            user = await parksDao.findParkByUsername(username);
            break;
        case "ranger":
            user = await rangersDao.findRangerByUsername(username);
            break;
        default:
            break;
    }
    if (user) {
        res.sendStatus(404)
        return
    } else {
        let newUser;
        switch (role) {
            case "hiker":
                user = await hikersDao.createHiker(username);
                break;
            case "park":
                user = await parksDao.createPark(username);
                break;
            case "ranger":
                user = await rangersDao.createRanger(username);
                break;
            default:
                break;
        }
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