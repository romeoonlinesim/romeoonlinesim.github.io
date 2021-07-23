const express = require("express");
const router = express.Router();
const Competition = require("../schema/competitionSchema");
const processCompetition = require("../competition/processCompetition");
const matchAvailable = require("../competition/matchAvailable");

const sp = require("synchronized-promise");

router.get("/start", (req, res) => {
    //processCompetition([1,2,3,4]);
    Competition.findOne().sort({_id: -1})
    .then((currentCompetition) => {
        if (currentCompetition !== null && currentCompetition.ongoing === true) {
            console.log("There is an ongoing competition");
            res.send({
                success: false
            });
        } else {
            //if no ongoing competition, start one
            processCompetition([1,2,3,4]);
            res.send({
                success: true
            });
        }
    })
    
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
                    message: "There is no ongoing competition. If you want, you can start a new one."
                });
            } //else if (currentCompetition.ongoing === true && match === false) {
                else if (currentCompetition.ongoing === true && global.status === false) {
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
        } catch (err) {
            console.log(err);
        }

        
    })
});

router.get("/liveMatch",async function(req, res) {
    try {
        console.log("success");
        res.sendFile(global.match);
        /*const temp = await Promise.all([matchAvailable(0)]);
        const path = temp[0];
        if (path !== false) {
            console.log("success");
            res.sendFile(path);
        } else {
            res.send({
                ongoing: false,
                message: "Something wrong"
            });
        }*/
        
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;