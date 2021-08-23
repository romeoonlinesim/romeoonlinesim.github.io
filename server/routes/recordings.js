const express = require("express");
const router = express.Router();
const Competition = require("../schema/competitionSchema");
const Team = require("../schema/teamSchema");


router.get("/", async function (req, res) {
    const competitionsTemp = await Competition.find({ongoing: false});
    const teamsTemp = await Team.find({}).sort({"index":1}).exec();
    const result = {
        competitions: competitionsTemp,
        teams: teamsTemp
    }
    res.send(JSON.stringify(result));
});

router.get("/download/:folderPath/:fileName", (req, res) => {
    const folderPath = process.env.HOME_PATH + "/" + req.params.folderPath + "/";
    const fileName = req.params.fileName;
    const filePath = folderPath + fileName;
    
    res.download(filePath, fileName, (err) => {
        if (err) {
            console.log(err);
        }
    });
});

router.get("/playback/:folderPath/:fileName", (req, res) => {
    const folderPath = process.env.HOME_PATH + "/" + req.params.folderPath + "/";
    const fileName = req.params.fileName;
    const filePath = folderPath + fileName;
    console.log(filePath);
   
    res.sendFile(filePath);
});

module.exports = router;