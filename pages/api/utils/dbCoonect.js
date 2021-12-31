import mongoose from "mongoose"
const connection = {}
const url = "mongodb://localhost/emuserdata"

const dbConect = async ()=>{
  if(connection.isConnected){
    return;
  }

  const db = await mongoose.connect(url, {
    useUnifiedTopology: true, useNewUrlParser: true
  })

  connection.isConnected = db.connections[0].readyState
  console.log(connection.isConnected)
}

export default dbConect