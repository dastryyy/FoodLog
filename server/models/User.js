const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: True
    },
    password: {
        type: String,
        required: True
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;