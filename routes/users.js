const express = require('express');
const datarouter = express.Router()
const userscontroller = require('../controllers/usersprocess');

datarouter.post('/registeruser',userscontroller.registeruser)
datarouter.get('/getuserdata',userscontroller.getuserdata)
datarouter.get('/getsingleuser',userscontroller.getSingleUserData)
datarouter.get('/getusersfiltered',userscontroller.getuserdatafilter)
datarouter.post('/deleteuser',userscontroller.deleteuserdata)




module.exports = datarouter
