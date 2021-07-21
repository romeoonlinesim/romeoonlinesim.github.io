const Competition = require("../schema/competitionSchema");

module.exports = function() {
    const lastCompetition = Competition.findOne().sort({_id: -1});

    //if first competition in database
    if (lastCompetition === undefined) {
        const result = {
            compNumber: 1,
            initialized: false
        };
        return compNumber;
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
}
