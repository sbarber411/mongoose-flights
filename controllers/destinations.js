const Flight = require("../models/flight");

module.exports = {
  create,
};

function create(req, res) {
 
  Flight.findById(req.params.id, function (err, flightDoc) {
    if (err) {
      console.log(err, " <- error ");
      return res.send("can't find destination");
    }

    console.log("======");
    console.log(flightDoc, " <- flight from database!");
    console.log("======");

   
    flightDoc.destinations.push(req.body);
    
    flightDoc.save(function (err) {
    
	  console.log(err, " <- err from ")
      
      res.redirect(`/flights/${req.params.id}`);
    });
  });
}