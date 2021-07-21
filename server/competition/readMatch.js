const fs = require("fs");

module.exports = function(path) {
    try {
        const data = fs.readFileSync(path, "utf-8");
        return data.split("\n").length;
    } catch (err) {
        console.log(err);
        return false;
    }
}