const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    userId: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    parentId: {
        type: Schema.ObjectId,
        ref: 'Task'
    },
    stateId: {
        type: Schema.ObjectId,
        ref: 'State'
    },
    description: String,
    deadline: Date
}, {
    timestamps: true
});

export const task = mongoose.model('Task', taskSchema);