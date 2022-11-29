const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')
const cors = require('cors')
const employeeRoutes = require('./routes/employee')

const app = express()

mongoose.connect(config.DATABASE_CONNECT_URL, err => {
    if(err) {
        console.log(err)
    }else{
        console.log('Connected to the database')
    }
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(cors())
app.options('*', cors())

app.use(`${config.API}/accounts`, employeeRoutes)

app.listen(config.PORT, err => {
    console.log('Listening: ' + config.PORT)
})
