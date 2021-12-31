import nc from "next-connect"
import data from "../../../components/Data"


// const test = (req, res)=>{
//   res.statusCode = 200;
//   res.setHeader("content-type", "application/json")
//   res.end(JSON.stringify({message:"welcome home"}))
// }

const test = nc()
.get((req, res)=>{
  res.status(200).json({data: data})
})
.post((req, res)=>{
      const myData = {
        ...req.body,
        id:Date.now()
      };
      data.push(myData)
      res.status(200).json({data: myData})
})



export default test