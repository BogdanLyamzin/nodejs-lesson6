const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const {Schema, model} = mongoose;

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

