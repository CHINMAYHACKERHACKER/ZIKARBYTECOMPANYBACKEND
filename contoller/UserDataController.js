const UserModel = require("../model/UserData.js");
module.exports = async (req, res) => {
    const { name, email, dob, phone, address } = req.body;
    try {
        const UserData = new UserModel({
            Name: name,
            Email: email,
            Dob: dob,
            PhoneNumber: phone,
            Address: address
        })
        const SaveData = await UserData.save();

        if (SaveData) {
            res.status(200).send("DataSaved");
        }
    }
    catch (e) {
        res.status(500).send("Sever Error");
    }
}