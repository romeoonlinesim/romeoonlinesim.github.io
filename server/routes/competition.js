const express = require("express");
const router = express.Router();
const Competition = require("../schema/competitionSchema");
const Team = require("../schema/teamSchema");
const processCompetition = require("../competition/processCompetition");
const matchAvailable = require("../competition/matchAvailable");

router.post("/start", (req, res) => {
    console.log(req.body);
    Competition.findOne().sort({_id: -1})
    .then((currentCompetition) => {
        if (currentCompetition !== null && currentCompetition.ongoing === true) {
            console.log("There is an ongoing competition");
            res.send({
                success: false
            });
        } else {
            //if no ongoing competition, start one
            processCompetition(req.body.teams);
            res.send({
                success: true
            });
        }
    });
    
});

router.get("/live", function(req, res) {
    console.log(global.cycle)
    //check if current competition is running
    Competition.findOne().sort({_id: -1})
    .then(async function(currentCompetition) {
        try {
            const temp = await Promise.all([matchAvailable(currentCompetition.ongoingMatch-1)]);
            const match = temp[0];

            if (currentCompetition.ongoing === false) {
                res.send({
                    cycle: global.cycle,
                    ongoing: false,
                    competitionStart: false,
                    message: "There is no ongoing competition. If you want, you can start a new one."
                });
            } else if (currentCompetition.ongoing === true && global.status === false) {
                res.send({
                    cycle: global.cycle,
                    ongoing: false,
                    competitionStart: true,
                    message: "The current match may need some time to process. You can try to refresh the page."
                });
            } else {
                res.send({
                    cycle: global.cycle,
                    ongoing: true,
                    competitionStart: true,
                    message: "success"
                });
            }
        } catch (err) {
            console.log(err);
        }
    });
});

router.get("/brackets", async function(req, res) {
    const competitionTemp = await Competition.findOne({ongoing: true});
    const teamsTemp = await Team.find({}).sort({"index":1}).exec();
    const result = {
        competition: competitionTemp,
        teams: teamsTemp
    }
    res.send(JSON.stringify(result));
})

router.get("/liveMatch", function(req, res) {
    try {
        console.log("global match" + global.match);
        console.log("global match count " + global.matchCount);
        console.log("success");
        res.sendFile(global.match);        
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;