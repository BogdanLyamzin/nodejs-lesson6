const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const {DB_HOST} = process.env;

const connection = mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

connection
    .then(()=> {
        console.log("Server is running")
        app.listen(3000);
    })
    .catch((err)=> console.log(`Server not running. Error - ${err.message}`));

const {Schema, model} = mongoose;

const witcherSchema = new Schema({
    name: String,
    lastName: String,
    age: Number,
    friends: [String],
    weapons: {
        leftSword: String,
        rightSword: String
    }
});

const Witcher = new model("Witcher", witcherSchema);

const newWitcher = {
    name: "Herald",
    lastName: "from Rivii",
    age: 55,
    friends: ["Лютик", "Весемир", "Йеннифер"]
    // birthday: "12.12.1899"
};

Witcher.create(newWitcher)

/*
String
Number
Boolean
Date
ObjectId
Arrray
Mixed
Buffer
*/

