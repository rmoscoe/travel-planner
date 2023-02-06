const router = require('express').Router();
const { Traveller, Trips, location } = ('../../models');

// GET route `/api/travellers` returns all traveller data without associated trips
router.get('/', async (req, res) => {
    try {
        const travellersData = Traveller.findAll();
        res.status(200).json(travellersData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET route `/api/travellers/:id` returns a single traveller's data with their associated trips and a list of locations
router.get('/:id', async (req, res) => {
    try {
        const travellerById = Traveller.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: Trips,
                model: location,
                // through: {
                //     attribute: []
                // }
            }
        });
        if (!travellersById) {
            res.status(404).send('Traveller not found');
        }
        res.status(200).json(travellersById);
    } catch (err) {
        res.status(500).json(err);
    }
})
