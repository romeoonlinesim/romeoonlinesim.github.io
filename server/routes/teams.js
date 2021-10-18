const express = require("express");
const router = express.Router();
const Team = require("../schema/teamSchema");

router.get("/download/:teamNumber/:fileName", async function(req, res) {
    const team = await Team.findOne({index: req.params.teamNumber}).exec();
    const filePath = team.sourcePath;
    
    res.download(filePath, req.params.fileName, (err) => {
        if (err) {
            
        }
    });
});

module.exports = router;