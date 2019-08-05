'use strict'

//DB connection
// =============================================================================
var mongoose = require('mongoose');
var uri = 'mongodb://heroku_lfpc67mc:orlu3ij36evtcc938do9hkvj90@ds131512.mlab.com:31512/heroku_lfpc67mc';

mongoose.Promise = require('bluebird');

function connect() {
    mongoose.connect(process.env.MONGODB_URI || uri, {
            useMongoClient: true,
            promiseLibrary: require('bluebird')
        })
        .then(() => console.log('connection succesful'))
        .catch((err) => console.error(err));
}

module.exports = {
    connect: connect,
    db: mongoose
};