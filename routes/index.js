const router = require('express').Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });
  
  module.exports = router;