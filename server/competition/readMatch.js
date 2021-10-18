const fs = require("fs");

module.exports = function(path) {
    try {
        if (path === false) {
            return false;
        }
        const data = fs.readFileSync(path, "utf-8");
        return data.split("\n").length;
    } catch (err) {
        return false;
    }
}