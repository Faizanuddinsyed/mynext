import Image from "next/image"

function Team() {
  return (
    <>
    <div className="md:flex md:m-8 items-center ">
        <div className="md:w-[526px] md:h-[528px] w-[312px] h-[380px] border bg-gray-400 mx-auto mb-2 rounded-[40px] md:rounded-none md:mr-10 ">
         <h1 className="text-5xl md:mt-56 m-36 flex justify-center items-center">TEAM PHOTO</h1>
         
        </div>

        <div className="md:ml-0 md:mb-40 md:w-[447px] md:h-[168px] w-[315px] h-[160px] mx-auto">
            <h1 className="mb-2 font-bison text-4xl text-center md:font-bold md:leading-10">BE A PART OF WELLNESS COMMUNITY</h1>
            <p className="font-roboto md:text-start text-center text-[14px] md:text-[18px]">The Heartfulness International Sports Center (HISC) was conceived in 2020 as an integrated multi-sport facility to promote excellence in sports, with the guidance of leading sports icons such as <span  className="font-bold">Pullela Gopichand, P. V. Sindhu,</span> and with a close association of sporting inspirations like that of <span className="font-bold">Havier Zanett, Rohit Sharma, R. Ashwin, and Ravi Shashtri.</span></p>
            <h1 className="text-center mt-4 ml-20 md:ml-0 rounded-3xl p-5   text-white bg-orange-600  w-[175px] h-[52px] font-roboto font-medium text-xs">SIGN UP NOW</h1>
        </div>

       
    </div>
    
    
    
    </>
  )
}

export default Team