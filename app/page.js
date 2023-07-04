import Navbar from '@/Components/Navbar'
import Image from 'next/image'
import {FiPlay} from 'react-icons/fi';


export default function Home() {
  return (
    

<div class="min-h-screen bg-no-repeat bg-contain  md:bg-cover md:bg-top  bg-top bg-[url('../public/whatsimg.jpeg')]  ">
      <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white  md:inset-0 md:bg-gradient-to-l md:from-transparent md:to-white ">
        <div className="ml-10 mt- mr-10 md:ml-20 md:mr-20 " >


     <Navbar/>


     <div className=" flex flex-col items-center justify-center  md:items-start mt-48  ">
            
            <p className="md:bg-orange-600 md:block hidden  text-center text-xs rounded-3xl w-64 md:p-2  text-white  ">START YOUR HEALTHY LIFESTYLE!</p>
             <div className='text-center bg-gray-200 rounded-3xl  p-9 mt-5 md:bg-transparent md:text-left md:mt-0 md:p-0 md:rounded-none'>
             <p className="md:bg-orange-600 font-jost font-bold text-orange-600 md:hidden sm:block  text-center text-xl whitespace-nowrap md:text-xs rounded-3xl  w-64 p-2 md:text-white  ">START YOUR HEALTHY LIFESTYLE!</p>
                <h1 className="text-4xl font-semibold font-bison md:font-semibold  mt-5  whitespace-nowrap   md:text-7xl ">BEGIN YOUR <br/>TRANSFORMATION <br/>TODAY</h1>
                  <p className="mt-5 text-black w-full text-lg   md:text-xs md:w-96">Heartfulness International Sports Center
                      (HISC) empowers children and youth to unlock
                      their heart's potential through sports, fostering holistic well
                      being and personal growth.
                  </p>
                  <div className="cursor-pointer  mt-5 text-md rounded-3xl border-2 border-current   p-2 flex items-center justify-center gap-3  md:w-44 "><div>Show More </div><div><FiPlay /></div></div>
                </div>
      </div>
    </div>
  </div>
     
    </div>
  )
  }

