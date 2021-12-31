

export async function getStaticProps(context){
  const res = await fetch ("http://localhost:3000/api/classTest/class")

  const result = await res.json()

  if(!result){
    return{
      noFound:true
    }
  }
  return {
    props:{result}
  }
}

function card({result}) {
  console.log(result)
  const { data =[]} = result
  return (
    <div className="flex h-screen w-screen justify-around">
     
     {
       data.map((props)=>(
         <div >
            <div className="flex h-screen justify-center items-center">
        <div className="w-64 h-96 shadow-xl bg-emerald-200 rounded-xl flex flex-col items-center" >
          <div className="h-24 w-24 m-3 bg-gray-500 rounded-full "></div>
          <div className="w-64 h-6 bg-transparent   justify-center flex text-white font-bold text-xl">
            {props.name}
          </div>
          <div className="w-64 h-28 text-center m-6">
          ipsum debitis quas aliquid. Reprehenderit,
          quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
  
          </div>
        
          <div className="w-64 h-16 bg-white-500 bg-emerald-400">
        
  
        </div>
  
        </div>
        </div>
           </div>
       
       ))
     }
      
    
    
    </div>
  )
}

export default card
