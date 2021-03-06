const {exec} = require("child_process");
const Recording = require("../schema/recordingSchema");

module.exports = async function(competition, leftTeam, rightTeam, matchNumber, currentRound) {
    //const path = "/Github Repo/romeoonlinesim.github.io/scripts/main.cpp";
    const path = process.env.HOME_PATH;

    const newRcgFileName = "comp" + competition.index + "-team" + leftTeam + "-team" + rightTeam + ".rcg";
    getLastFile = () => {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                exec(`ls ${path} -Art | grep '.rcg' | tail -n 1`, (err, stdout, stderr) => {
                    if (err) {
                        return ;
                    }
                    if (stderr) {
                        return; 
                    }
                    if (stdout) {
                        const tempFileName = stdout.split(".")[0];
                        const temp = tempFileName.split("-");
                        const leftMatches = temp[0].split("_");
                        const rightMatches = temp[temp.length-1].split("_");
                        const leftResult = leftMatches[leftMatches.length-1];
                        const rightResult = rightMatches[rightMatches.length-1];
                        const leftPenaltyCheck = leftMatches[leftMatches.length-2];
                        const rightPenaltyCheck = rightMatches[rightMatches.length-2];
                        
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
                        exec("cp " + path + "/" + stdout.split("\n")[0] + " " + path + "/out.rcg", (err, stdout, stderr) => {
                            if (err) {
                                return;
                            }
                            if (stderr) {
                                return; 
                            }
                        });

                        
                        exec("mv " + path + "/" + stdout.split("\n")[0] + " " + path + "/" + newRcgFileName, (err, stdout, stderr) => {
                            if (err) {
                                return;
                            }
                            if (stderr) {
                                return; 
                            }
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
                    return;
                }
                if (stderr) {
                    return; 
                }
            });
        }, 1000);
    }

    //processing cpp script
    processScript = () => {
        setTimeout(function() {
            exec(`${path}/main`, {maxBuffer: 1024*200000}, (err, stdout, stderr) => {
                if (err) {
                    return;
                }
                if (stderr) {
                    return; 
                }
            });
        }, 3000);
    }

    //rename file
    const fileName = "comp" + competition.index + "-team" + leftTeam + "-team" + rightTeam + ".txt";
    renameFile = () => {
        setTimeout(function() {
            exec(`mv ${path}/out.txt ${path}/${fileName}`, (err, stdout, stderr) => {
                if (err) {
                    return;
                }
                if (stderr) {
                    return; 
                }
            });
        }, 4500);
    }

    //if folder not exists then create
    makeFolder = () => {
        setTimeout(function() {
            exec(`mkdir ${path}/comp${competition.index}`, (err, stdout, stderr) => {
                //if folder not exist
                if (err) {
                    return;
                }
                if (stderr) {
                    return; 
                }
            });
        }, 5000);
    }

    //move file into folder
    moveFile = () => {
        setTimeout(function() {
            exec(`mv ${path}/${fileName} ${path}/comp${competition.index}`, (err, stdout, stderr) => {
                if (err) {
                    return;
                }
                if (stderr) {
                    return; 
                }
            });
        }, 6000);

        setTimeout(function() {
            exec(`mv ${path}/${newRcgFileName} ${path}/comp${competition.index}`, (err, stdout, stderr) => {
                if (err) {
                    return;
                }
                if (stderr) {
                    return; 
                }
            });
        }, 6000);
    }

    removeRcgFile = () => {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                exec(`rm ${path}/out.rcg`, (err, stdout, stderr) => {
                    if (err) {
                        //resolve(console.log(`error: remove rcg file`));
                        return;
                    }
                    if (stderr) {
                        //resolve(console.log(`stderr: remove rcg file`));
                        return resolve(stderr); 
                    }
                    //return resolve(console.log(`stdout: remove rcg file`));
                })
            }, 7000);
        })
        
    }

    

    const result = await Promise.all([getLastFile(), removeRclFile(), processScript(), renameFile(), makeFolder(), moveFile(), removeRcgFile()]);
    return result[0];
}