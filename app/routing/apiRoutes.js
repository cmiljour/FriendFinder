// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var fs = require("fs");
var friends = require("../data/friends.js")



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // fs.appendFile("./app/data/friends.js", JSON.stringify(req.body), (err) => {
    //   if (err) throw err;
    //   console.log("The file was appended!")
    friends.push(req.body);
    });
    
  
};