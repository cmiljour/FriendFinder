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
    //variable to hold the user's survey data
    var surveyNumbers = req.body.scores;
    //array to only hold scores of all posted surveys
    var onlyScoreArray = [];
    //array to hold the difference in scores 
    var diffArray = [];
    //go through each survey result object
    friends.forEach(function(element){
      for (let i=0; i<surveyNumbers.length; i++) {
        //populate array with only difference between just posted survey data
        //and previously posted survey data
        diffArray[i] = Math.abs(surveyNumbers[i]-element.scores[i]);
      }
      //sum up scores
      var addedScores = diffArray.reduce((a,b) => a + b, 0);
      //add the scores to a scores only array 
      onlyScoreArray.push(addedScores);
    });
    // find the best match by picking the smallest score and identifying its index
    var bestMatch = indexOfSmallest(onlyScoreArray);
    //send the best match object back
    res.send(friends[bestMatch]);
    //add the submitted survey results to the array 
    friends.push(req.body);
    
    
  });
    
    function indexOfSmallest(array) {
      return array.indexOf(Math.min.apply(Math, array));
    }
};