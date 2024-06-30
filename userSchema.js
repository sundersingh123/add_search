const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name : String,
    email: String,
    phone : Number
});

const User= mongoose.model('users',UserSchema);
module.exports = User;