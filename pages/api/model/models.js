const mongoose = require("mongoose")

const emSehema =  mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  des:{
    type:String,
    require:true
  }
})

module.exports  = mongoose.models.DataEm || mongoose.model("DataEm", emSehema)