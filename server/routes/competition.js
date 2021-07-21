const express = require("express");
const router = express.Router();
const Competition = require("../schema/competitionSchema");
const processCompetition = require("../competition/processCompetition");
const matchAvailable = require("../competition/matchAvailable");

router.get("/start", (req, res) => {
    const currentCompetition = Competition.findOne().sort({_id: -1});
    if (currentCompetition.ongoing === true) {
        console.log("There is an ongoing competition");
        res.send({
            success: false
        });
    } else {
        //if no ongoing competition, start one
        processCompetition();
        res.send({
            success: true
        });
    }
});

router.get("/live", (req, res) => {
    //check if current competition is running
    const currentCompetition = Competition.findOne().sort({_id: -1});

    if (currentCompetition.ongoing === false) {
        res.send({
            cycle: global.cycle,
            ongoing: false,
            message: "There is no ongoing competition. If you want, you can start a new one."
        });
    } else if (currentCompetition.ongoing === true && matchAvailable(currentCompetition) === false) {
        res.send({
            cycle: global.cycle,
            ongoing: false,
            message: "The current match may need some time to process. You can try to refresh the page."
        });
    } else {
        res.send({
            cycle: global.cycle,
            ongoing: true,
            message: "success"
        });
    }
    
});

router.get("/liveMatch", (req, res) => {
    try {
        const path = matchAvailable();
        console.log("success");
        res.sendFile(path);
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;