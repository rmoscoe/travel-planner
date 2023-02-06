const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// database name travel_planner

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Big Brother is listening on http://localhost:${PORT}...`))
});
