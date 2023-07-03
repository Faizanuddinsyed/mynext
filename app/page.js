import Navbar from '@/Components/Navbar'
import Image from 'next/image'
import {FaPlay} from 'react-icons/fa';


export default function Home() {
  return (
    

<div class="min-h-screen bg-no-repeat bg-contain  md:bg-cover md:bg-top  bg-top bg-[url('../public/whatsimg.jpeg')]  ">
      <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white  md:inset-0 md:bg-gradient-to-l md:from-transparent md:to-white ">
        <div className="ml-10 mt- mr-10 md:ml-20 md:mr-20 " >


     <Navbar/>


     <div className=" flex flex-col items-center justify-center  md:items-start mt-48 p-12 ">
            
            <p className="bg-orange-600  text-center text-sm rounded-3xl w-64 pl-2 pr-2 pt-3 pb-3 text-white  ">START YOUR HEALTHY LIFESTYLE!</p>
             <div className='text-center bg-gray-200 rounded-3xl  p-9 mt-5 md:bg-transparent md:text-left md:mt-0 md:p-0 md:rounded-none'>
                <h1 className="text-4xl md:font-bold font-mono  mt-5  whitespace-nowrap   md:text-7xl">BEGIN YOUR <br/>TRANSFORMATION <br/>TODAY</h1>
                  <p className="mt-5 text-black w-full text-lg   md:text-xs md:w-96">Heartfulness International Sports Center
                      (HISC) empowers children and youth to unlock
                      their heart's potential through sports, fostering holistic well
                      being and personal growth.
                  </p>
                  <div className="cursor-pointer mt-5 text-md rounded-3xl border-2 border-current   p-2 flex items-center justify-center gap-3 w-full md:w-64 "><div>Show More </div></div>
                </div>
      </div>
    </div>
  </div>
     
    </div>
  )
  }

