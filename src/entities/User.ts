const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    name: String,
    lastname: String,
    email: String,
    birthdate: Date
}, {
    timestamps: true
});

export const User = mongoose.model('User', userSchema);
