const sp = require("synchronized-promise");
const Recording = require("../schema/recordingSchema");
const Team = require("../schema/teamSchema");
const Competition = require("../schema/competitionSchema");
const processMatch = require("./processMatch");
const matchAvailable = require("./matchAvailable");
const readMatch = require("./readMatch");


function  setCycle(matchTime, match) {
    global.remainingTime += matchTime;
    global.matchCount++;
    global.cycle = 0;
    global.status = true;
    global.match = match;

    const interval = setInterval(async function() {
        global.cycle++;
        if (global.remainingTime > 0) 
            global.remainingTime--;
        if (global.cycle > matchTime) {
            //clear cycle and set live match status to false
            clearInterval(interval);
            global.status = false;

            //try to start new cycle if there is an available match
            try {
                const temp = await Promise.all([matchAvailable(global.matchCount+1)]);
                if (temp[0] !== false) {
                    setCycle(readMatch(temp[0]), temp[0]);
                } else {
                    global.cycle = 0;
                    //global.matchCount = 0;
                }
            } catch (err) {

            }
            
        }
    }, 100);
}

module.exports = async function(teams) {
    Competition.findOne().sort({_id: -1})
    .then((lastCompetition) => {
        //if first competition in database
        if (lastCompetition === null) {
            const result = {
                compNumber: 1,
                initialized: false
            };
            return result;
        } 

        //if winner is set
        if (lastCompetition.winner !== 0) {
            //next competition
            const result = {
                compNumber: lastCompetition.index + 1,
                initialized: false
            };
            return result;
        }

        const result = {
            compNumber: lastCompetition.index,
            initialized: true
        };
        
        return result;
    })
    .then(async function(currentComp) {
        //if not existed, create new
        if (currentComp.initialized === false) {
            //start new competition
            await Competition.create({
                index: currentComp.compNumber,
                numberOfTeams: teams.length,
                teams: teams,
                winner: 0,
                remainingTeams: teams,
                firstRound: teams,
                secondRound: [],
                thirdRound: [],
                firstRoundResult: new Array(),
                secondRoundResult: new Array(),
                thirdRoundResult: new Array(),
                ongoing: true,
                ongoingMatch: 0
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
        }
        return currentComp;
    })
    .then(async function(currentComp) {
        setTimeout(function() {
            //process competition
            Competition.findOne({index: currentComp.compNumber})
            .then(async function(currentCompetition) {
                var remainingMatches  = [];
                var currentRound = 0;
                var ongoingMatch = 1;

                while (ongoingMatch < currentCompetition.numberOfTeams) {
                    if (remainingMatches.length === 0) {
                        remainingMatches = currentCompetition.remainingTeams.slice();
                        currentRound++;
                    }
                    currentCompetition.ongoingMatch = ongoingMatch;

                    const leftTeam = remainingMatches[0];
                    const rightTeam = remainingMatches[1];

                    //wait for the match to finish
                    const tmp = await Promise.all([processMatch(currentCompetition, leftTeam, rightTeam, ongoingMatch, currentRound)]);
                    const matchLoser = tmp[0].loser;

                    //start counting cycles if match available and no cycle is being counted
                    try {
                        const temp = await Promise.all([matchAvailable(ongoingMatch)]);
                        //if there is an available match and live match status is false, set cycle to run
                        if (temp[0] !== false && global.status === false) {
                            setCycle(readMatch(temp[0]), temp[0]);
                        }
                    } catch (err) {
                    }

                    //remove the teams that just finish the match
                    remainingMatches.splice(0, 2);

                    //update current competition data
                    //remove loser from remaining teams
                    let remainingTeams = currentCompetition.remainingTeams;
                    const loserIndex = remainingTeams.indexOf(matchLoser);
                    if (loserIndex !== -1) {
                        remainingTeams.splice(loserIndex, 1);
                    }

                    //update remaining teams
                    currentCompetition.remainingTeams = remainingTeams;
                    //update second and third round if possible
                    if (remainingTeams.length === teams.length/2) {
                        currentCompetition.secondRound = remainingTeams;
                    } else if (remainingTeams.length === teams.length/4) {
                        currentCompetition.thirdRound = remainingTeams;
                    }

                    //if last match, save the winner
                    if (remainingTeams.length === 1) {
                        currentCompetition.winner = remainingTeams[0];
                        try {
                            const timeTmp = await Promise.all([matchAvailable(ongoingMatch)]);
                            
                            //wait for some time to set the competition to finish
                            if (timeTmp[0] !== false) {
                                const waitTime = readMatch(timeTmp[0]);
                                if (waitTime !== false) {
                                    setTimeout(function() {
                                        currentCompetition.ongoing = false;
                                        currentCompetition.save();
                                        global.matchCount = 0;
                                    }, global.remainingTime*200 + 60000);
                                }
                            }
                        } catch (err) {
                            
                        }
                        currentCompetition.ongoingMatch++; 
                    }
                    currentCompetition.save();

                    ongoingMatch++;
                } 
            });
        }, 2000);
    })
}