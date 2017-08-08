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
    // pull out the score from the post request
    var number = req.body.scores;
    var onlyScoreArray = [];
    var diffArray = [];
    // console.log(number);

    // pull out the scores from our current stored friends array to a new array
    // of scores only.
    friends.forEach(function(element){
      for (let i=0; i<number.length; i++) {
        diffArray[i] = Math.abs(number[i]-element.scores[i]);
      }
      var addedScores = diffArray.reduce((a,b) => a + b, 0);
      onlyScoreArray.push(addedScores);
    });
    
    var bestMatch = indexOfSmallest(onlyScoreArray);
    console.log(onlyScoreArray);
    console.log(friends[bestMatch]);
    
    // run the 'closest' function to find the closest match from the just posted score
    // against our newArray of scores and store the number found in closeNum
    // var closeNum = closest(number,newArray);

    // find the index value of the closest number
    // var numIndexMatch = newArray.indexOf(closeNum);
    friends.push(req.body);
    // console.log(friends[numIndexMatch]);
    
  });
    
    // a function to find the closest number to a specified number in an array
    // function closest (num, arr) {
    //     var curr = arr[0];
    //     var diff = Math.abs (num - curr);
    //     for (var val = 0; val < arr.length; val++) {
    //         var newdiff = Math.abs (num - arr[val]);
    //         if (newdiff < diff) {
    //             diff = newdiff;
    //             curr = arr[val];
    //         }
    //     }
    //     return curr;
    // }
    function indexOfSmallest(array) {
      return array.indexOf(Math.min.apply(Math, array));
    }
};