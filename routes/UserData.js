const routers = require("express").Router();
const UserDataController = require("../contoller/UserDataController.js");

routers.post("/user", UserDataController);

module.exports = routers;