export const getDatabase = async()=>{
    try{
      const res =  await fetch('http://localhost:3000/api/database')
      if(!res.ok){
         throw new Error("Failed to fetch topics")   
      }
     return res.json()
     
    }catch(error){
     console.log(error)
    }
 
 } 