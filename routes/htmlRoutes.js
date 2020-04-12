let path = require("path");
let router = require("express").Router();

module.exports = function(app) {
    router.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });
}




module.exports = router;