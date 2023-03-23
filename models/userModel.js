const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {type: String, requied: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 5},
});

module.exports = Users = mongoose.model("user", userSchema);