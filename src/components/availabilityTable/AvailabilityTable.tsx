import React from 'react'
 const event = [ "Events", "Availability"]
export default function AvailabilityTable() {
  return (
   
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
  <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
    
    <div>
    <div className='w-full'>
              <span className="mr-3 text-black font-extrabold text-sm">Time Formate</span>
              <div className="relative ">
                <select className="appearance-none  w-full  border-gray-300 py-2 pl-3 pr-10 border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1">
                  <option defaultValue={"My Calendly"}>My Calendly</option>
                  {
                    event.map((val, i) => {
                      return (
                        <option value={val} key={i}>{val}</option>
                      )
                    })
                  }
                </select>
                <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                   
                    className="lucide lucide-chevron-down"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              
            </div>
    </div>
    <div>
      <p className="mt-1 text-sm text-gray-700 float-end">
       Display 1 of 1 availability
      </p>
    </div>
  </div>
  <div className="mt-6 flex flex-col">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-borderClr-1 md:rounded-lg">
          <table className="min-w-full divide-y divide-borderClr-1">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  <span>Employee</span>
                </th>
                <th
                  scope="col"
                  className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Role
                </th>
                <th scope="col" className="relative px-4 py-3.5">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-borderClr-1 bg-white">
              <tr>
                <td className="whitespace-nowrap px-4 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        John Doe
                      </div>
                      <div className="text-sm text-gray-700">john@devui.com</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-12 py-4">
                  <div className="text-sm text-gray-900 ">Front-end Developer</div>
                  <div className="text-sm text-gray-700">Engineering</div>
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Active
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  Developer
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                  <a href="#" className="text-gray-700">
                    Edit
                  </a>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

   
  )
}
