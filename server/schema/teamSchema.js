const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const teamSchema = new Schema({
    index: Number, 
    name: String,
    path: String,
    script: String
});

const Team = mongoose.model("team", teamSchema);

module.exports = Team;