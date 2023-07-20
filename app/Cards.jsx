import { getDatabase } from "./getdata";
export default async function Cards(){
   const{database} = await getDatabase()

   const creators = database.filter(function(item){
      if (item.role == "creator") {
        return true;
      } else {
        return false;
      }
    }).length;
    const admins = database.filter(function(item){
      if (item.role == "admin") {
        return true;
      } else {
        return false;
      }
    }).length;
    const users = database.filter(function(item){
      if (item.role == "user") {
        return true;
      } else {
        return false;
      }
    }).length;

   
    return(
      <>  
      <div className="flex justify-between py-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
             <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">No.of CREATORS: <span>{creators}</span></div>
             </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
             <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">No.of ADMINS:<span>{admins}</span></div>
             </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
             <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">No.of USERS:<span>{users}</span></div>
             </div> 
          </div>
          {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
             <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">No.of LOGINS TODAY:<span>0</span></div>
             </div> 
          </div> */}
      </div>
    </>  
    )
  }