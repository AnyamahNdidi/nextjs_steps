import data from "../../../components/Data"
import nc from "next-connect"

// const test = (req, res)=>{
//    const {query:id} = req.body

//   const getData= (id) =>{
//     res.statu(200).json({
//       id:req.query.id,
//       name:"matthew",
//       email:"budass@gmail.com"
//     })
//   }
// }
const getData = (id) => data.find((el)=> el.id === parseInt(id))

const test = nc()
.get((req, res)=>{
  const getOne = getData(req.query.id)
  res.status(200).json({data: getOne})
})

export default test