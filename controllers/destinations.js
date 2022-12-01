const Flight = require("../models/flight");

module.exports = {
  create,
};

function create(req, res) {
 
  Flight.findById(req.params.id, function (err, flightDoc) {
    if (err) {
      console.log(err, " <- err from Flight.findById callback");
      return res.send("error finding destination");
    }

    console.log("========================");
    console.log(flightDoc, " <- flight from the database!");
    console.log("========================");

   
    flightDoc.destinations.push(req.body);
    
    flightDoc.save(function (err) {
    
	  console.log(err, " <_ err from flightDoc.save callback")
      
      res.redirect(`/flights/${req.params.id}`);
    });
  });
}
