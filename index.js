const express = require("express");
const cors = require("cors");
const app = express();
const DBCONNECT = require("./DataBase/DataBase.js");
const UserRoute = require("./routes/UserData.js");
app.use(express.json());
app.use(cors());
app.use("/api", UserRoute);

app.listen(3001, () => {
    console.log("Server Running On Port 3001");
})