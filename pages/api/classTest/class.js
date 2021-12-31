import dbConect from "../utils/dbCoonect";
import DataEms from "../model/models"
import nc from "next-connect"

dbConect()

const test = nc().get(async(req, res)=>{

  const dataEm = await DataEms.find()
  res.status(200).json({succes:true, data:dataEm})

}).post( async (req,res)=>{

  const emploData = new DataEms(req.body)
  await emploData.save()
  res.status(201).json(emploData)

})

export default test