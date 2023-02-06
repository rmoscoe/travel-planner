const router = require('express').Router();
const locationRoutes = require('./location-routes');
const travellersRoutes = require('./travellers-routes');
const tripsRoutes = require('./trips-routes');

router.use('/travellers', travellersRoutes);
router.use('/trips', tripsRoutes);
router.use('/location', locationRoutes);

module.exports = router;