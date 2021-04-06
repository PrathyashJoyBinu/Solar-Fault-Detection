const mongoose = require('mongoose')

const AllData = mongoose.Schema({
  dateTime : {
      type: String,
      required: true
  },
    dateInfo : {
        type: String,
        required: true
    },
    timeInfo : {
        type: String,
        required: true
    },

    counter : {
        type: String,
        required: true
    },
    weather : {
        type: String,
        required: true
    },
    windSpeed : {
        type: String,
        required: true
    },
    supplyVoltage:{
        type: String,
        required: true
    },
    inverter1_PV1_Voltage : {
        type: String,
        required: true
    },
    inverter1_PV1_Current : {
        type: String,
        required: true
    },
    inverter1_PV1_Power : {
        type: String,
        required: true
    },
    inverter1_PV2_Voltage : {
        type: String,
        required: true
    },
    inverter1_PV2_Current : {
        type: String,
        required: true
    },
    inverter1_PV2_Power : {
        type: String,
        required: true
    },
    inverter1_PV_Energy : {
        type: String,
        required: true
    },
    inverter1_AC_Voltage:{
      type: String,
        required: true
    },
    inverter1_AC_Current : {
        type: String,
        required: true
    },
    inverter1_AC_Power : {
        type: String,
        required: true
    },
    inverter1_AC_HZ : {
        type: String,
        required: true
    },

    inverter2_PV1_Voltage : {
        type: String,
        required: true
    },
    inverter2_PV1_Current : {
        type: String,
        required: true
    },
    inverter2_PV1_Power : {
        type: String,
        required: true
    },
    inverter2_PV2_Voltage : {
        type: String,
        required: true
    },
    inverter2_PV2_Current: {
        type: String,
        required: true
    },
    inverter2_PV2_Power : {
        type: String,
        required: true
    },
    inverter2_PV_Energy : {
        type: String,
        required: true
    },
    inverter2_AC_Power : {
        type: String,
        required: true
    },
    inverter1_FLT_Code : {
        type: String,
        required: true
    },
    inverter2_FLT_Code : {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('logs',AllData)