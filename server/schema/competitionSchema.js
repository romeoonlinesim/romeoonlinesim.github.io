const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const competitionSchema = new Schema({
    index: Number, 
    numberOfTeams: Number,
    teams: Array,
    winner: Number,
    remainingTeams: Array,
    firstRound: Array,
    secondRound: Array,
    thirdRound: Array,
    ongoing: Boolean,
    ongoingMatch: Number
});

const Competition = mongoose.model("competition", competitionSchema);

module.exports = Competition;