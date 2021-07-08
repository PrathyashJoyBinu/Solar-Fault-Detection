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
router.get("/getAllTime", (req, res) => {
    // try{
    //     const getTime = getDataModels.find().then((data, err)=>{
    //         res.json(data)
    //     })
    //     // console.log(req.body.dateInfo)
    //     // console.log(getTime)
    //     // res.json(getTime)
    // }catch (err) {
    //     console.log({message:err})
    // }

    getDataModels.find({},(err, result)=>{
        if(err)
        return res.json(err)
        return res.json(result)
    })
})


///
router.post("/postData",async (req, res) => {
    try {
        const tempData = new postDataModels({title: "hi",description:"Hi jerin"})
        const savedDeta = await tempData.save()
        console.log(savedDeta)


        console.log (tempData)
        
    } catch (error) {
        
    }
})

module.exports = router

