const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const recordingSchema = new Schema({
    competitionNumber: Number, 
    matchNumber: Number,
    leftTeamNumber: Number,
    rightTeamNumber: Number,
    winTeamNumber: Number,
});

const Recording = mongoose.model("recording", recordingSchema);

module.exports = Recording;