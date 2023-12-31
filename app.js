import "dotenv/config";
import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import UsersController from "./users/users-controller.js";
import PostsController from "./posts/posts-controller.js";
import AuthController from "./users/auth-controller.js";
import ParksController from "./users/parks/parks-controller.js";
import HikersController from "./users/hikers/hikers-controller.js";
import RangersController from "./users/rangers/rangers-controller.js";
import ResetController from "./reset-controller.js";
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING
mongoose.connect(DB_CONNECTION_STRING)

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true
    };
}
app.use(session(sessionOptions));

app.use(express.json());
UsersController(app);
PostsController(app);
AuthController(app);
ParksController(app);
HikersController(app);
RangersController(app);
ResetController(app);
app.listen(process.env.PORT || 4000);