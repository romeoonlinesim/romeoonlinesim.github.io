const {exec} = require("child_process");
const { resolveCname } = require("dns");
const Recording = require("../schema/recordingSchema");

module.exports = async function(competition) {
    const recording = Recording.findOne({
        competitionNumber: competition.index,
        matchNumber: competition.ongoingMatch
    });

    //if recording file not exists, return false
    //if exists, return file name
    checkRecording = () => {
        return new Promise((resolve, reject) => {
            if (recording === undefined) {
                return resolve(false);
            } else {
                path = "/home/nh16/comp" + competition.index;
                fileName = `comp${competition.index}-team${recording.leftTeamNumber}-team${recording.rightTeamNumber}.txt`;
    
                exec(`find ${path} -name ${fileName}`, (err, stdout, stderr) => {
                    if (err) {
                        return resolve(false);
                    }
                    if (stderr) {
                        return resolve(false);
                    }
                    if (stdout) {
                        //return file name
                        return resolve(path + "/" + fileName);
                    }
                });
            }
        });
    }

    const result = Promise.all([checkRecording()]);
    return result[0];
}