const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const getDataRoute = require('./routes/getData')

require('dotenv/config')
const app = express()
const port = 3000

app.use(bodyParser.json());
//DB Connect
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
    console.log("Connected to DB")
})




app.use('/get',getDataRoute)

app.listen(port,()=>{
    console.log(`api listening at http://localhost:${port}`)
})