const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://hacker:hacker123@cluster0.dtv1wiw.mongodb.net/user";
const DBCONNECT = async () => {
    const DBConnect = await mongoose.connect(MONGO_URL);
    if (DBConnect) {
        return console.log("DataBase Conneted");
    }
    else {
        return console.log("Error Connecting To DataBase")
    }
}
DBCONNECT();

module.exports = DBCONNECT;