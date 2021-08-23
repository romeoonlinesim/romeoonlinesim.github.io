const {exec} = require("child_process");
const { resolveCname } = require("dns");
const Recording = require("../schema/recordingSchema");
const Competition = require("../schema/competitionSchema");

module.exports = async function(ongoingMatch) {
    const competition = await Competition.findOne().sort({_id:-1});
    if (competition === null) {
        return false;
    }
    if (competition.ongoing === false ) {
        return false;
    }

    if (ongoingMatch !== 0) {
        recording = await Recording.findOne({
            competitionNumber: competition.index,
            matchNumber: ongoingMatch
        });
    } else {
        recording = await Recording.findOne({
            competitionNumber: competition.index,
            matchNumber: competition.ongoingMatch
        });
    }

    //if recording file not exists, return false
    //if exists, return file name
    checkRecording = () => {
        return new Promise((resolve, reject) => {
            if (recording === null) {
                return resolve(false);
            } else {
                path = process.env.COMPETITION_FOLDER + competition.index;
                fileName = `comp${competition.index}-team${recording.leftTeamNumber}-team${recording.rightTeamNumber}.txt`;
    
                exec(`find ${path} -name ${fileName}`, (err, stdout, stderr) => {
                    if (err) {
                        console.log("MATCH AVAILABLE ERROR: " + err.message);
                        return resolve(false);
                    }
                    if (stderr) {
                        console.log("MATCH AVAILABLE STDERR: " + stderr);
                        return resolve(false);
                    }
                    if (stdout) {
                        //return file name
                        //console.log("MATCH AVAILABLE STDOUT: " + stdout);   
                        return resolve(path + "/" + fileName);
                    }
                });
            }
        });
    }

    const result = await Promise.all([checkRecording()]);
    return result[0];
}