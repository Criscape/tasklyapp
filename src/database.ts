const mongoose = require('mongoose');

const user = process.env.MONGO_USER;
const psw = process.env.TASKLY_PSW;

const uri = `mongodb+srv://${user}:${psw}@cluster0.iaiel.mongodb.net/taskly?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

export const connection = mongoose.connection;