const Team = require("../schema/teamSchema");
require('dotenv').config();


module.exports = function() {
    Team.exists()
    .then((res) => {
        if (res === false) {
            Team.create({
                index: 1,
                name: "CYRUS",
                path: `${process.env.HOME_PATH}/Downloads/CYRUS_SS2D_RC2019_R3_BIN/cyrus/`,
                script: "./startAll"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 2,
                name: "FCP_GPR",
                path: `${process.env.HOME_PATH}/Downloads/FCP_GPR_SS2D_RC2019_R3_BIN/fcpgpr/`,
                script: "./start2"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 3,
                name: "MT",
                path: `${process.env.HOME_PATH}/Downloads/MT_SS2D_RC2019_R4_BIN/mt/`,
                script: "./start.sh"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 4,
                name: "Namira",
                path: `${process.env.HOME_PATH}/Downloads/Namira_SS2D_RC2018_BIN/home/namira/`,
                script: "./startAll"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });

            Team.create({
                index: 5,
                name: "HELIOS",
                path: `${process.env.HOME_PATH}/Downloads/HELIOS_SS2D_RC2019_R4_BIN/helios/`,
                script: "./startAll"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 6,
                name: "HfutEngine",
                path: `${process.env.HOME_PATH}/Downloads/HfutEngine_SS2D_RC2019_R3_BIN/hfutengine/`,
                script: "./start.sh"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 7,
                name: "HillStone",
                path: `${process.env.HOME_PATH}/Downloads/HillStone_SS2D_RC2019_R3_BIN/hillstone/`,
                script: "./start.sh"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 8,
                name: "ITAndroids",
                path: `${process.env.HOME_PATH}/Downloads/ITAndroids_SS2D_RC2019_R3_BIN/itandroids/scripts/start/`,
                script: "./start.sh"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });

            Team.create({
                index: 9,
                name: "Razi",
                path: `${process.env.HOME_PATH}/Downloads/Razi_SS2D_RC2019_R3_BIN/razi/`,
                script: "./startAll"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 10,
                name: "Receptivity",
                path: `${process.env.HOME_PATH}/Downloads/Receptivity_SS2D_RC2019_R3_BIN/receptivity/receptivity/src/`,
                script: "./start.sh"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 11,
                name: "RoboCIn",
                path: `${process.env.HOME_PATH}/Downloads/RoboCln_SS2D_RC2019_R3_BIN/robocin/`,
                script: "./startAll"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 12,
                name: "Titans_of_Robotics",
                path: `${process.env.HOME_PATH}/Downloads/Titans_of_Robotics_SS2D_RC2019_R3_BIN/titans/src/`,
                script: "./start.sh"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
        }
        
    });
}