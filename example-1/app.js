const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const {DB_HOST} = process.env;

const conntection = mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

connection
    .then(()=> {
        console.log("Server running")
    })
    .catch((err)=> console.log(`Server not running. Error - ${err.message}`));