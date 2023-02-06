const router = require('express').Router();
const { Traveller, Trips, location } = ('../../models');

//todo return all locations
router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
})

//todo creates location {"name": "location"} and adds to database
router.post('/', async (req, res) => {
    try {
        const newLocation = await Location.create({ name: req.body.name});
        if(!newLocation) {
            res.status(404).json({ message: 'Please enter a location'});
            return;
        }
        res.status(200).json(newLocation);
    } catch (err) {
        res.status(500).json(err);
    }
});

//todo returns location by id with its associated trips
router.get('/:id', async (req, res) => {
    try {
        const localId = await Location.findByPk(req.params.id, {include: [{model: Trips}]});
        if(!localId) {
            res.status(404).json({message: 'No location with that id! :('});
            return;
        }
        res.status(200).json(localId);
    } catch (err) {
        res.status(500).json(err);
    }
});

//todo removes location by id and any trips associated with it
router.delete('/:id', async (req, res) => {
    try {
        const localData = await Location.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!localData) {
            res.status(404).json({message: 'No location with this id! :('});
            return;
        }
        res.status(200).json(localData);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;