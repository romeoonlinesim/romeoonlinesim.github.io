const {exec} = require("child_process");
const Recording = require("../schema/recordingSchema");

module.exports = async function(competitionNumber, leftTeam, rightTeam, matchNumber) {
    //const path = "/Github Repo/romeoonlinesim.github.io/scripts/main.cpp";
    const path = "/home/nh16";

    getLastFile = () => {
        return new Promise((resolve, reject) => {
            exec(`ls ${path} -Art | grep '.rcg' | tail -n 1`, (err, stdout, stderr) => {
                if (err) {
                    console.log(`error: ${err.message}`);
                    return ;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return; 
                }
                if (stdout) {
                    const tempFileName = stdout.split(".")[0];
                    const temp = tempFileName.split("-");
                    const leftMatches = temp[0].match(/\d+$/);
                    const rightMatches = temp[2].match(/\d+$/);
                    const leftResult = leftMatches[0];
                    const rightResult = rightMatches[0];
                    
                    if (leftResult > rightResult) {
                        winner = leftResult;
                        loser = rightResult;
                    } else {
                        winner = rightResult;
                        loser = leftResult;
                    }

                    //rename to out.rcg file
                    exec(`mv ${path}/${stdout} out.rcg`, (err, stdout, stderr) => {
                        return;
                    });

                    return resolve({
                        winner: winner,
                        loser: loser
                    });
                }
                
            });
        });   
    }

    //remove match's rcl file
    removeRclFile = () => {
        exec(`rm ${path}/*.rcl`, (err, stdout, stderr) => {
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
    }

    //processing cpp script
    processScript = () => {
        setTimeout(function() {
            exec(`${path}/main`, (err, stdout, stderr) => {
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

    //rename file
    const fileName = "comp" + competitionNumber + "-team" + leftTeam + "-team" + rightTeam + ".txt";
    renameFile = () => {
        setTimeout(function() {
            exec(`mv ${path}/out.txt ${path}/${fileName}`, (err, stdout, stderr) => {
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
        }, 4000);
    }

    //if folder not exists then create
    makeFolder = () => {
        setTimeout(function() {
            exec(`mkdir ${path}/comp${competitionNumber}`, (err, stdout, stderr) => {
                //if folder not exist
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
        }, 5000);
    }

    //move file into folder
    moveFile = () => {
        setTimeout(function() {
            exec(`mv ${path}/${fileName} ${path}/comp${competitionNumber}`, (err, stdout, stderr) => {
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
        }, 6000);
    }

    removeRcgFile = () => {
        setTimeout(function() {
            exec(`rm ${path}/out.rcg`, (err, stdout, stderr) => {
                return;
            })
        }, 7000)
    }

    //add new record to database
    addRecord = () => {
            Recording.create({
            competitionNum: competitionNumber,
            matchNumber: matchNumber,
            leftTeamNumber: leftTeam,
            rightTeamNumber: rightTeam,
            winTeamNumber: winner
        }, (err, instance) => {
            if (err) return handleError(err);
        });
    }

    const result = await Promise.all([getLastFile(), removeRclFile(), processScript(), renameFile(), makeFolder(), moveFile(), addRecord()]);
    return result[0];
}