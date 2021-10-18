const {exec} = require("child_process");
const Team = require("../schema/teamSchema");
const processRecord = require("../recordings/processRecord");



module.exports = async function(competition, leftTeam, rightTeam, matchNumber, currentRound) {
    const left = await Team.findOne({index: leftTeam});
    const right = await Team.findOne({index: rightTeam});
    const leftTeamPath = left.path;
    const rightTeamPath = right.path;
    const leftTeamScript = left.script;
    const rightTeamScript = right.script;
    runServer = () => {
        return new Promise((resolve, reject) => {
            //run server
            exec(process.env.SOCCER_SERVER, (err, stdout, stderr) => {
                if (err) {
                    return reject(err.message);
                }
                if (stderr) {
                    //when finish the match process record
                    return resolve(processRecord(competition, leftTeam, rightTeam, matchNumber, currentRound));
                }
            });
        });
    }
    
    runLeftTeam = () => {
        //run left team
        setTimeout(function() {
            exec(leftTeamScript, {cwd: leftTeamPath, maxBuffer: 1024*200000}, (err, stdout, stderr) => {
                if (err) {
                    return;
                }
                if (stderr) {
                    return; 
                }
            });
        }, 1500);
    }
    
    runRightTeam = () => {
        //run right team
        setTimeout(function() {
            exec(rightTeamScript, {cwd: rightTeamPath, maxBuffer: 1024*200000}, (err, stdout, stderr) => {
                if (err) {
                    return;
                }
                if (stderr) {
                    return; 
                }
            });
        }, 3000);
    }

        
    const result = await Promise.all([runServer(), runLeftTeam(), runRightTeam()]);
    return {
        winner: result[0].winner,
        loser: result[0].loser
    };
}