const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stateSchema = new Schema({
    name: String,
    description: String
}, {
    timestamps: true
});

export const state = mongoose.model('State', stateSchema);