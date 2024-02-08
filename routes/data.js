const express = require('express');
const datarouter = express.Router()
const datacontroller = require('../controllers/dataprocess');

datarouter.post('/registerservice',datacontroller.registerservice)
datarouter.get('/getdataservice',datacontroller.getservicedata)
datarouter.post('/deletedataservice',datacontroller.deleteservicedata)

module.exports = datarouter