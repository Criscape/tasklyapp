const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stateSchema = new Schema({
    name: String,
    description: String
}, {
    timestamps: true
});

export const State = mongoose.model('State', stateSchema);