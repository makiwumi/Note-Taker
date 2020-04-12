//declare express, fs and db
const fs = require('fs');
const router = require("express").Router();
const store = require("../js/store");
const path = require('path');
let db = require("../db/db.json");

//get notes
router.get("/notes", function(req, res){
  res.send(db);
});

//post notes where information is stored
router.post("/notes", function(req,res){
  db.push(store(req.body));
  res.json(true);
});

// /api/notes/:id
router.delete("/notes/:id", function(req, res){
  db = db.filter(elem => elem.id != req.params.id);
  res.json(true);
});

module.exports = router;