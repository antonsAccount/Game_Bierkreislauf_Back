const mongoose = require("mongoose");

const bierSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        minLength: [2, "min length is 2 chars"]
    },
    origin: {
        type: String,
        require: true,
        minLength: [2, "min length is 2 chars"]
    },
    nicknames: {
        type: Array
    }
})

module.exports = mongoose.model("Bier", bierSchema)