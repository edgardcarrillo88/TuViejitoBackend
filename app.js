const express = require('express')
require('dotenv').config()
const dbconnect = require("./database")
const cors = require('cors')
const app = express()
const datacontroller = require('./routes/data')
const userscontroller = require('./routes/users')
const path = require('path')

dbconnect(app)

app.use(cors({
    origin: process.env.URL_PAGE,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  }));

app.use(express.json())

app.use('/api/v1/data',datacontroller)
app.use('/api/v1/users',userscontroller) 

app.use(express.static(path.join(__dirname,'public')))