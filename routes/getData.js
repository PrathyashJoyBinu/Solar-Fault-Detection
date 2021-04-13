const express = require('express')
const router = express()
const getDataModels = require('../models/allDataModel')
const postDataModels = require('../models/timeModel')



router.get('/',(req, res) =>{
    res.send("Api service started")
})
//Get all time by date.
router.get("/AllData", async (req, res) => {

    console.log(req.query.title)
    try {
      const getData = await getDataModels.aggregate([{$match:{$and:[{dateInfo: req.query.dateInfo}, {timeInfo: req.query.timeInfo}]}}])
        res.json(getData)
    }
    catch (err) {
        res.json({message: err})
    }
})

    // .project({title:1,description:1})





// Get all data by time
router.get("/getAllTime",async (req, res) => {
    try{
        const getTime = await getDataModels.find({dateInfo: req.query.dateInfo},{timeInfo:1})
        res.json(getTime)
    }catch (err) {
        console.log({message:err})
    }
})

module.exports = router

