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
        if (!travellerById) {
            res.status(404).send('Traveller not found');
        }
        res.status(200).json(travellerById);
    } catch (err) {
        res.status(500).json(err);
    }
})

// POST route `/api/travellers` creates traveller data and returns a successful response
router.post('/', async (req, res) => {
    console.log("new traveller added: ");
    console.log(req.body)
    try {
        const newTraveller = await Traveller.create({
            name: req.body.name,
            email: req.body.email
        });
        res.status(200).send(`New traveller: ${newTraveller.name} has been added to the database.`);
    } catch (err) {
        res.status(500).json(err);
    }
})

// DELETE route `/api/travellers/:id` removes a traveller and any trips associated with them and returns a successful response
router.delete('/:id', async (req, res) => {
    try {
        const travellerById = await Traveller.findById(req.params.id)
        if (!travellerById) {
            res.status(404).send('Traveller not found')
        }
        await Traveller.destroy({
            where: {
                id: travellerById.id
            }
        })
        res.status(200).send(`Traveller ${travellerById.name} has been deleted!`)
    } catch (err) {
        res.status(500).json(err);
    }
})