const express = require('express');
const db = require('./config/connection');
const routes = require('./routes/userRoute');

const PORT = 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// print to console if there is connection issue
db.on('error', (err) => {console.error(err)});

//conneecting to the mongodb
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
