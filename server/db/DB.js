const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;
const db = async () => {
    try {
        let connect = await mongoose.connect(MONGODB_URL);
        console.log(`MongoDB Connected to ${connect.connection.host}`)
    } catch (e) {
        console.error("MongoDB Connect Error : ", e);
    }
}

module.exports = db