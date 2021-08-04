const {exec} = require("child_process");
const Recording = require("../schema/recordingSchema");

module.exports = async function(competition, leftTeam, rightTeam, matchNumber, currentRound) {
    //const path = "/Github Repo/romeoonlinesim.github.io/scripts/main.cpp";
    const path = process.env.HOME_PATH;
    console.log("process record");

    getLastFile = () => {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
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
                        const leftPenaltyCheck = leftMatches[1];
                        const rightPenaltyCheck = rightMatches[1];
                        
                        if (leftResult > rightResult) {
                            winner = leftTeam;
                            loser = rightTeam;
                        } else {
                            winner = rightTeam;
                            loser = leftTeam;
                        }

                        //add to result
                        if (leftPenaltyCheck === rightPenaltyCheck && leftPenaltyCheck !== undefined && rightPenaltyCheck !== undefined) {
                            if (currentRound === 1) {
                                competition.firstRoundResult.push(leftPenaltyCheck + " (" + leftResult + ")");
                                competition.firstRoundResult.push(rightPenaltyCheck + " (" + rightResult + ")");
                            } else if (currentRound === 2) {
                                competition.secondRoundResult.push(leftPenaltyCheck + " (" + leftResult + ")");
                                competition.secondRoundResult.push(rightPenaltyCheck + " (" + rightResult + ")");
                            } else if (currentRound === 3) {
                                competition.thirdRoundResult.push(leftPenaltyCheck + " (" + leftResult + ")");
                                competition.thirdRoundResult.push(rightPenaltyCheck + " (" + rightResult + ")");
                            }
                        } else {
                            if (currentRound === 1) {
                                competition.firstRoundResult.push(leftResult);
                                competition.firstRoundResult.push(rightResult);
                            } else if (currentRound === 2) {
                                competition.secondRoundResult.push(leftResult);
                                competition.secondRoundResult.push(rightResult);
                            } else if (currentRound === 3) {
                                competition.thirdRoundResult.push(leftResult);
                                competition.thirdRoundResult.push(rightResult);
                            }
                        }
                        competition.save();
    
                        //rename to out.rcg file
                        console.log("mv " + path + "/" + stdout + " " + path + "/out.rcg");
                        exec("mv " + path + "/" + stdout.split("\n")[0] + " " + path + "/out.rcg", (err, stdout, stderr) => {
                            if (err) {
                                console.log(`error rename file: ${err.message}`);
                                return;
                            }
                            if (stderr) {
                                console.log(`stderr rename file: ${stderr}`);
                                return; 
                            }
                            console.log(`stdout rename file: ${stdout}`);
                        });
    
                        //add new record to database
                        Recording.create({
                            competitionNumber: competition.index,
                            matchNumber: matchNumber,
                            leftTeamNumber: leftTeam,
                            rightTeamNumber: rightTeam,
                            winTeamNumber: winner
                        }, (err, instance) => {
                            if (err) return handleError(err);
                        });
    
                        

                        return resolve({
                            winner: winner,
                            loser: loser
                        });
                    }
                    
                });
            }, 2000);
        });   
    }

    //remove match's rcl file
    removeRclFile = () => {
        setTimeout(function() {
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
        }, 1000);
    }

    //processing cpp script
    processScript = () => {
        setTimeout(function() {
            exec(`${path}/main`, {maxBuffer: 1024*200000}, (err, stdout, stderr) => {
                if (err) {
                    console.log(`error: run main`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: run main`);
                    return; 
                }
                console.log(`stdout: run main`);
            });
        }, 3000);
    }

    //rename file
    const fileName = "comp" + competition.index + "-team" + leftTeam + "-team" + rightTeam + ".txt";
    renameFile = () => {
        setTimeout(function() {
            exec(`mv ${path}/out.txt ${path}/${fileName}`, (err, stdout, stderr) => {
                if (err) {
                    console.log(`error: rename file`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: rename file`);
                    return; 
                }
                console.log(`stdout: rename file`);
            });
        }, 4500);
    }

    //if folder not exists then create
    makeFolder = () => {
        setTimeout(function() {
            exec(`mkdir ${path}/comp${competition.index}`, (err, stdout, stderr) => {
                //if folder not exist
                if (err) {
                    console.log(`error: make folder`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: make folder`);
                    return; 
                }
                console.log(`stdout: make folder`);
            });
        }, 5000);
    }

    //move file into folder
    moveFile = () => {
        setTimeout(function() {
            exec(`mv ${path}/${fileName} ${path}/comp${competition.index}`, (err, stdout, stderr) => {
                if (err) {
                    console.log(`error: move file`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: move file`);
                    return; 
                }
                console.log(`stdout: move file`);
            });
        }, 6000);
    }

    removeRcgFile = () => {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                exec(`rm ${path}/out.rcg`, (err, stdout, stderr) => {
                    if (err) {
                        resolve(console.log(`error: remove rcg file`));
                        return;
                    }
                    if (stderr) {
                        resolve(console.log(`stderr: remove rcg file`));
                        return resolve(stderr); 
                    }
                    return resolve(console.log(`stdout: remove rcg file`));
                })
            }, 7000);
        })
        
    }

    

    const result = await Promise.all([getLastFile(), removeRclFile(), processScript(), renameFile(), makeFolder(), moveFile(), removeRcgFile()]);
    console.log("process record done");
    return result[0];
}