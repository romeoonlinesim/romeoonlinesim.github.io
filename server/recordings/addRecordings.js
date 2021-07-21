const Recording = require("../schema/recordingSchema");

exports.addRecording = function(numberOfTeams, winTeam) {
    const lastRecord = Recording.findOne().sort({_id: -1});
    

    //if first record in database
    if (lastRecord === undefined) {
        Recording.create({competitionNum: 1, matchNumber: 1, leftTeamNum: 1, rightTeamNum: 1, winTeamNum: winTeam}, (err, instance) => {
            if (err) return handleError(err);
        });
        return;
    }

    const currentRecords = Recording.find({competitionNum: lastRecord.competitionNum}).sort({_id: -1}).limit(numberOfTeams).map(record => record.toObject());

    //if last match of a competition
    if (currentRecords.length === numberOfTeams) {
        //next competition
        const compNumber = lastRecord[numberOfTeams-1].competitionNum + 1;
        Recording.create({competitionNum: compNumber, matchNumber: 1, leftTeamNum: 1, rightTeamNum: 1, winTeamNum: winTeam}, (err, instance) => {
            if (err) return handleError(err);
        });
        return;
    }

    const power = Math.log(numberOfTeams)/Math.log(2);
    const nextMatchNumber = lastRecord.matchNumber + 1;
    
    //if first round
    if (nextMatchNumber <= numberOfTeams/power) {
        
    }
    console.log(lastRecord);

    var recordingInstance = new Recording();
    recordingInstance.save(function(err) {
        if (err) return handleError(err);
    });
}
