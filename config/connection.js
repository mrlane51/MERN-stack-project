const { connect, connection } = require('mongoose');
require('dotenv').config({ path: require('find-config')('.env') });

//moved the url to env
connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;