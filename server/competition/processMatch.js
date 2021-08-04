const {exec} = require("child_process");
const Team = require("../schema/teamSchema");
const processRecord = require("../recordings/processRecord");



module.exports = async function(competition, leftTeam, rightTeam, matchNumber, currentRound) {
    const left = await Team.findOne({index: leftTeam});
    const right = await Team.findOne({index: rightTeam});
    const leftTeamPath = left.path;
    const rightTeamPath = right.path;
    //return new Promise(async function(resolve, reject) {
        
        /*console.log("processMatch competition" + competition + "\n" + leftTeam + " " + rightTeam);
        console.log("processMatch team" + leftTeamPath + "\n" + rightTeamPath);
        console.log("processMatch" + "match number");*/

        runServer = () => {
            return new Promise((resolve, reject) => {
                //run server
                exec(process.env.SOCCER_SERVER, (err, stdout, stderr) => {
                    if (err) {
                        console.log(`error: ${err.message}`);
                        return reject(err.message);
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        //when finish the match process record
                        return resolve(processRecord(competition, leftTeam, rightTeam, matchNumber, currentRound));
                    }
                    //console.log(`stdout: ${stdout}`);
                });
            });
        }
        
        runLeftTeam = () => {
            //run left team
            setTimeout(function() {
                exec(leftTeamPath, {maxBuffer: 1024*200000}, (err, stdout, stderr) => {
                    if (err) {
                        //console.log(`error: ${err.message}`);
                        return;
                    }
                    if (stderr) {
                        //console.log(`stderr: ${stderr}`);
                        return; 
                    }
                    //console.log(`stdout: ${stdout}`);
                });
            }, 1500);
        }
        
        runRightTeam = () => {
            //run right team
            setTimeout(function() {
                exec(rightTeamPath, {maxBuffer: 1024*200000}, (err, stdout, stderr) => {
                    if (err) {
                        //console.log(`error: ${err.message}`);
                        return;
                    }
                    if (stderr) {
                        //console.log(`stderr: ${stderr}`);
                        return; 
                    }
                    //console.log(`stdout: ${stdout}`);
                });
            }, 2000);
        }

        
        const result = await Promise.all([runServer(), runLeftTeam(), runRightTeam()]);
        console.log("running");
        console.log(result);
        return {
            winner: result[0].winner,
            loser: result[0].loser
        };
        
    //});
}