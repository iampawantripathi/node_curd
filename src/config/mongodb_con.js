const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const URL = dotenv.parsed.DB_URL;

<<<<<<< HEAD
const connectDB = () => {
    return mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
=======
mongoose.connect(URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Mongodb connection has been established successfully!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

>>>>>>> d0605782ab2ca2d3a4295d134cdfdf83d3a1c3a9
