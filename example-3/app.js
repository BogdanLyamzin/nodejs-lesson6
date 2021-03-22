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
    name: {
        type: String,
        required: [true, "У ведьмака должно быть имя!"],
        // minlength: 2,
        // maxlength: 30,
        // match: /[A-z]{3,}/g
    },
    lastName: {
        type: String,
        default: "Из Ривии"
    },
    age: {
        type: Number,
        required: true,
        validate: {
            validator(value){
                return (value >= 18);
            },
            message: props => `${props.value} - возраст ведьмака не может быть меньше 18!`
        }
        // min: 18,
        // max: 1000
    },
    // email: {
    //     type: String,
    //     unique: true
    // }
    // friends: [String],
    // phoneType: {
    //     type: String,
    //     enum: ["мобильный", "стационарный"]
    // },
    // weapons: {
    //     leftSword: String,
    //     rightSword: String
    // }
});

const Witcher = new model("Witcher", witcherSchema);

const newWitcher = {
    // name: "Herald",
    lastName: "from Rivii",
    age: 17,
    // email: "bogdan@gmail.com"
    // friends: ["Лютик", "Весемир", "Йеннифер"]
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

