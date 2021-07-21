const Recording = require("../schema/recordingSchema");
const Team = require("../schema/teamSchema");
const Competition = require("../schema/competitionSchema");
const lastCompetition = require("./lastCompetition");
const processMatch = require("./processMatch");
const matchAvailable = require("./matchAvailable");
const readMatch = require("./readMatch");

function setCycle(matchTime) {
    global.cycle = 0;
    global.status = true;
    const interval = setInterval(() => {
        global.cycle++;
        if (global.cycle > matchTime) {
            clearInterval(interval);
            global.cycleStatus = false;
            if (matchAvailable() !== false) {
                setCycle(readMatch(matchAvailable));
            }
        }
    }, 1000);
}

module.exports = async function(teams) {
    const currentComp = lastCompetition();

    if (currentComp.initialized === false) {
        //shuffle brackets
        var currentIndex = teams.length, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [teams[currentIndex], teams[randomIndex]] = [
            teams[randomIndex], teams[currentIndex]];
        }

        //start new competition
        Competition.create({
            index: currentComp.compNumber,
            numberOfTeams: teams.length,
            teams: teams,
            winner: 0,
            remainingTeams: teams,
            firstRound: teams,
            secondRound: [],
            thirdRound: [],
            ongoing: true,
            ongoingMatch: 0
        }, (err, instance ) => {
            if (err) return handleError(err);
        });
    }

    //process competition
    const currentCompetition = Competition.findOne({index: currentComp.compNumber});
    var remainingMatches  = [];
    var ongoingMatch = 1;

    while (ongoingMatch < lastCompetition.numberOfTeams) {
        if (remainingMatches.length === 0) {
            remainingMatches  = currentCompetition.remainingTeams;
        }
        currentCompetition.ongoingMatch = ongoingMatch;

        const leftTeam = currentCompetition.remainingMatches[0];
        const rightTeam = currentCompetition.remainingMatches[1];

        //wait for the match to finish
        const matchLoser = await processMatch(currentCompetition, leftTeam, rightTeam, ongoingMatch).loser;

        //run cycles if match available and no cycle is being counted
        if (matchAvailable() !== false && global.status === false) {
            setCycle(readMatch(matchAvailable));
        }

        //remove the teams that just finish the match
        remainingMatches.splice(0, 2);

        //update current competition data
        //remove loser from remaining teams
        let remainingTeams = currentCompetition.remainingTeams;
        const temp = array.indexOf(matchLoser);
        if (temp !== -1) {
            remainingTeams.splice(temp, 1);
        }

        //update remaining teams
        currentCompetition.remainingTeams = remainingTeams;
        //update second and third round if possible
        if (remainingTeams.length === teams/2) {
            currentCompetition.secondRound = remainingTeams;
        } else if (remainingTeams.length === teams/4) {
            currentCompetition.thirdRound = remainingTeams;
        }

        //if last match, save the winner
        if (remainingTeams === 1) {
            currentCompetition.winner = remainingTeams[0];
            currentCompetition.ongoing = false;
        }
        currentCompetition.save();

        ongoingMatch++;
    } 

}