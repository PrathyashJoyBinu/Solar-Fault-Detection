const mongoose = require('mongoose')

const AllData = mongoose.Schema({

    dateInfo: {
        type: String
      },
      timeInfo: {
        type: String
      },
      counter: {
        type: String
      },
      rain: {
        type: String
      },
      windspeed: {
        type: String
      },
      radiation: {
        type: String
      },
      nverter1_PV1_Voltage: {
        type: String
      },
      inverter1_PV1_Current: {
        type: String
      },
      inverter1_PV1_Power: {
        type: String
      },
      inverter1_PV2_Voltage: {
        type: String
      },
      inverter1_PV2_Current: {
        type: String
      },
      inverter1_PV2_Power: {
        type: String
      },
      inverter1_PV_Energy: {
        type: String
      },
      inverter1_AC_Voltage: {
        type: String
      },
      inverter1_AC_Current: {
        type: String
      },
      inverter1_AC_Power: {
        type: String
      },
      inverter1_AC_HZ: {
        type: String
      },
      inverter2_PV1_Voltage: {
        type: String
      },
      inverter2_PV1_Current: {
        type: String
      },
      inverter2_PV1_Power: {
        type: String
      },
      inverter2_PV2_Voltage: {
        type: String
      },
      inverter2_PV2_Current: {
        type: String
      },
      inverter2_PV2_Power: {
        type: String
      },
      inverter2_PV_Energy: {
        type: String
      },
      inverter2_AC_Power: {
        type: String
      },
      f1_Array_Mismatch: {
        type: String
      },
      f2_Clean: {
        type: String
      },
      f3_String_Break: {
        type: String
      },
      f4_SC_String: {
        type: String
      },
      f5_Load_Dsco: {
        type: String
      }
    
})

module.exports = mongoose.model('logdata',AllData)