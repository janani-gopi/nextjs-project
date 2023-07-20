
import SearchandFilter from "./Searchandfilter";
import { getDatabase } from "./getdata";



export default async function Table(props){  
    const {database} = await getDatabase() 

    return(
        <>   
        <SearchandFilter/> 
        <div className="max-w-auto rounded overflow-hidden shadow-lg my-5">
        <div className="mt-6 flex flex-col">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    <span id="us">Username</span>
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    role
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Date of Join
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
              {database?.map((t)=> (<tr key={t._id}>
                  <td className="whitespace-nowrap px-4 py-4">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                         {t.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-12 py-4">
                    <div className="text-sm text-gray-900 ">{t.email}</div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4">
                    <div className="text-sm text-gray-900 ">{t.role}</div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                    {t.dateofjoin}
                  </td>
                </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
                </div>    
        </>
    )
}