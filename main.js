const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const getDataRoute = require('./routes/getData')
var cors = require('cors')
require('dotenv/config')
const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.json());
//DB Connect
mongoose.connect("mongodb+srv://snimozadmin:Cyberon123@snimoz.icul9.mongodb.net/anertlog?retryWrites=true&w=majority", {useNewUrlParser: true}, () => {
    console.log("Connected to DB")
})




app.use('/get',getDataRoute)

app.listen(process.env.PORT||8000,()=>{
    console.log(`api listening at http://localhost:${port}`)
})