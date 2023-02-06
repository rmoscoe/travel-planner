const router = require('express').Router();
const { Traveller, Trips, Location} = require('../../models');

// POST route `/api/trips` creates trip data between associated travellers and locations
router.post('/', async (req, res) => {
    try {
    // {
    // trip_budget: req.body.trip_budget,
    // traveller_amount: req.body.traveller_amount,
    // traveller_id: 
    // }
        const trip = Trips.create(req.body);
        
    } catch (err) {
        res.status(500).json(err);
    }
})

// DELETE route `/api/trips/:id` removes a trip and returns a successful response
router.delete('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
})