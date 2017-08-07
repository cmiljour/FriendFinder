// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../data/friends"));
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);
  });
};