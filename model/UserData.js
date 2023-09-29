const mongoose = require("mongoose");

const UserShema = new mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Dob: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    Address: { type: String, required: true }
})

const UserModel = mongoose.model("userdata", UserShema);

module.exports = UserModel;