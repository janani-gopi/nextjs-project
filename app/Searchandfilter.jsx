"use client"
import { useState } from "react";
import { FaSearch, FaCaretDown,FaFilter} from "react-icons/fa";

export default function SearchandFilter(){ 
    const [username,setUsername] = useState('')
    const data = username
    return(
        <div className="flex justify-between">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
               <div className="px-6 py-4">
                  <div className= "text-xl mb-2">Enter username here:
                     <input type="text" className="border-2 mx-2" value={username} onChange={(e)=>setUsername(e.target.value)}/><button><FaSearch/></button>
                  </div>
               </div>  
             </div>
              <div className="min-w-lg rounded overflow-hidden shadow-lg">
                 <div className="px-20 py-4">
                    <div className="text-xl mb-2">Filter by roles:
                       <div>
                         <select name="gender" id="gender" className="mx-2">
                            <option defaultValue={"opt1"}>Creator</option>
                            <option defaultValue={"opt2"}>Admin</option>
                            <option defaultValue={"opt2"}>User</option>
                         </select>
                         <button><FaFilter/></button>
                       </div>  
                     </div>
                   </div>
               </div>
            </div>  
    )
}