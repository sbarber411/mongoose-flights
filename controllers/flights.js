const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
	new: newFlight,
	create, 
	index,
	show
}

function show(req, res) {

	Flight.findById(req.params.id, function(err, flightDoc) {
	
        Ticket.find({flight: flightDoc._id}, function(err, ticketDocs){


            console.log(req.body, 'req body')
            console.log(flightDoc, 'flightdoc')
            console.log(ticketDocs, 'ticketdocs')
            res.render('flights/show',{flight: flightDoc, ticket: ticketDocs})
        })
    })
}


function index(req, res){

	Flight.find({}, function(err, flightDocs){
		
		console.log(flightDocs)

		res.render('flights/index', {flights: flightDocs, name: 'Barber International Airport'})
	})

}

function create(req,res){

    console.log(req.body,'contents of the form');

    Flight.create(req.body, function(err, flightDoc){
		if(err){
			console.log(err);
			return res.send('err creating check the terminal')
		} 

		console.log(flightDoc);
		

		// respond to the client
		res.redirect('/')
		
	}); // end of the callback function in Movie.create
    
}


function newFlight(req, res){
	const newFlight = new Flight();
	res.render('flights/new', {defaultDeparture: newFlight.departs});
};