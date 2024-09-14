import React from 'react'
import AllEventsData from '../Data/AllEventsData'

const AllEvents = () => {
  return (
    <><section className="text-gray-600 body-font">
    <div className="container px-5 sm:py-28 py-24 mx-auto">

        {/* -------- Heading ------------  */}
        <div className="flex flex-col text-center w-full sm:mb-20 mb-14">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
            Memorable Moments
            </h2>
            <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-gray-900">
            Our Journey Through Events
            </h1>
            <p className="w-44 mx-auto leading-relaxed text-base h-2 rounded-md bg-blue-500">
              
            </p>
          </div>
      
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {AllEventsData.map((data,index)=>(
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 AllboxesCard" key={index}>
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src={data.imgUrl}/>
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{data.name}</h2>
            <p className="text-base leading-relaxed mt-2">{data.desc}</p>
            <a className="text-blue-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        ))}
        
      </div>
    </div>
  </section></>
  )
}

export default AllEvents