const mongoose = require("mongoose");
const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI, {autoIndex: true});
    console.log(`MongoDB connected: ${conn.connection.name}`.bgBlue.underline);
}

module.exports = connectDB;