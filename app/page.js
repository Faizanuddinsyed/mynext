import Team from '@/Components/Team';
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa';
import {FiPlay} from 'react-icons/fi';

export default function Home() {
  return (
    <>
        <div class="min-h-screen bg-no-repeat   bg-contain  md:bg-right   bg-[url('../public/background.jpg')]  ">
          <div class="bg-gradient-to-b from-white via-transparent to-transparent md:bg-gradient-to-r md:from-white md:to-transparent md:via-blue-100 "> 
            <div className="ml-10 mr-10 md:ml-20 md:mr-20 " >

              <Navbar/>

              <div className="mt-48 flex flex-col  items-center justify-center align-center   md:items-start  ">
                
                  
                  <div className='shadow-custom text-center bg-blue-100 rounded-[40px] p-7 mt-5 w-315 h-416 md:bg-transparent md:text-left md:mt-0 md:p-0 md:rounded-none md:shadow-none'>
                    <p className="  text-center text-14 rounded-3xl w-64 p-2 text-orange font-jost font-700 leading-20.23 md:bg-custom md:text-white md:font-500  ">START YOUR HEALTHY LIFESTYLE!</p>
                      <h1 className="text-30 font-400 leading-42 font-bison text-sblack  h-126 w-226 mx-auto mt-3 flex justify-center items-center align-center md:text-80 md:font-400 md:w-430 md:h-216 md:leading-72 md:items-start md:ml-32 ">BEGIN YOUR TRANSFORMATION TODAY</h1>
                        <p className="mt-5 text-sblack  text-14 font-roboto leading-20 font-400  md:text-xs md:w-96 md:text-18 md:leading-24">Heartfulness International Sports Center
                            (HISC) empowers children and youth to unlock
                            their heart's potential through sports, fostering holistic well
                            being and personal growth.
                        </p>
                        <div className="flex items-center justify-center align-center mx-auto cursor-pointer rounded-3xl border-2 border-current gap-3  w-175 h-50 mt-5 text-gray md:w-175 md:h-50 md:mx-0 ">
                          <div className="font-500 text-13.85 leading-16.23  font-roboto ">Show More </div>
                          <div><Image src="/triangle.png" width={23.47} height={17.06} /></div>
                        </div>
                    </div>
              </div>
            
          </div>
          <div className='hidden md:flex justify-end mr-7 mt-5 text-vector cursor-pointer'><Image src="/vector.png" width={61} height={61} /></div>
        </div>
       
        
      </div>

      <Team/>

    </>
  )
}

