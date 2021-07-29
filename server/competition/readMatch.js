const fs = require("fs");

module.exports = function(path) {
    try {
        console.log("read match" + path);
        if (path === false) {
            console.log("READ MATCH RETURNS FALSE");
            return false;
        }
        const data = fs.readFileSync(path, "utf-8");
        return data.split("\n").length;
    } catch (err) {
        console.log(err);
        return false;
    }
}