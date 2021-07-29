const Team = require("../schema/teamSchema");
const Competition = require("../schema/competitionSchema");
const User = require("../schema/userSchema");


module.exports = function() {
    Team.exists()
    .then((res) => {
        if (res === false) {
            Team.create({
                index: 1,
                name: "HELIOS_2010",
                path: "/home/nh16/Downloads/helios-10Singapore/start.sh"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 2,
                name: "OPUCI_2D",
                path: "/home/nh16/Downloads/opuci_2d-robocup2010/opuci_2d-robocup2010/src/start.sh"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 3,
                name: "Agent2D",
                path: "/home/nh16/Downloads/agent2d-3.1.1/src/start.sh"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
    
            Team.create({
                index: 4,
                name: "Axiom",
                path: "/home/nh16/Downloads/Axiom_SS2D_RC2012_SRC/Axiom_SourceCode_Release2012/src/start.sh"
            }, (err, instance ) => {
                if (err) return handleError(err);
            });
        }
        
    });
}