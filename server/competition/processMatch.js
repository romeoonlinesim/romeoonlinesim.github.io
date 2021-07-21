const {exec} = require("child_process");
const Team = require("../schema/teamSchema");
const processRecord = require("../recordings/processRecord");



module.exports = async function(competition, leftTeam, rightTeam) {
    const leftTeamPath = Team.findOne({index: leftTeam}).path;
    const rightTeamPath = Team.findOne({index: rightTeam}).path;

    runServer = () => {
        return new Promise((resolve, reject) => {
            //run server
            exec("/home/nh16/rcssserver-16.0.0/src/rcssserver", (err, stdout, stderr) => {
                if (err) {
                    console.log(`error: ${err.message}`);
                    return reject(err.message);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    //when finish the match process record
                    return resolve(processRecord(competition.index, leftTeam, rightTeam, matchNumber));
                }
                console.log(`stdout: ${stdout}`);
            });
        });
    }
    
    runLeftTeam = () => {
        //run left team
        setTimeout(function() {
            exec(leftTeamPath, {maxBuffer: 1024*200000}, (err, stdout, stderr) => {
                if (err) {
                    console.log(`error: ${err.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return; 
                }
                console.log(`stdout: ${stdout}`);
            });
        }, 2000);
    }
    
    runRightTeam = () => {
        //run right team
        setTimeout(function() {
            exec(rightTeamPath, {maxBuffer: 1024*200000}, (err, stdout, stderr) => {
                if (err) {
                    console.log(`error: ${err.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return; 
                }
                console.log(`stdout: ${stdout}`);
            });
        }, 2000);
    }

    const result = await Promise.all([runServer(), runLeftTeam(), runRightTeam()]);
    //return match loser
    return result[0];
}