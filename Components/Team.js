import Image from "next/image"

function Team() {
  return (
    <>
    <div className="md:flex  md:m-8   items-center ">
        <div className="md:w-[526px] md:h-[528px] w-[300px] h-[380px]  bg- mx-auto mb-2 rounded-[40px] md:rounded-none md:mr-10 ">
         {/* <h1 className="text-5xl md:mt-56 m-36 flex justify-center items-center">TEAM PHOTO</h1> */}
         <Image className="rounded-[40px] md:rounded-none object-cover md:h-[528px] md:w-[526px] w-[312px] h-[380px]" src="/images/team5.jpg" alt="team photo" width={312} height={380}>

         </Image>
        </div>

        <div className="md:ml-0 md:mb-56 md:w-[447px] md:h-[168px] w-[300px] h-[160px] mx-auto">
            <h1 className="mb-2 font-bison text-[42px] leading-[42px] w-[300px] h-[84px] md:text-start md:font-bold md:leading-15 tracking-tighter text-center">BE A PART OF WELLNESS COMMUNITY</h1>
            <p className="font-roboto mt-11 font-400 md:text-start w-[300px] h-[160px] md:w-[447px] md:h-[168px] text-center text-[14px] md:text-[18px]">The Heartfulness International Sports Center (HISC) was conceived in 2020 as an integrated multi-sport facility to promote excellence in sports, with the guidance of leading sports icons such as <span  className="font-bold">Pullela Gopichand, P. V. Sindhu,</span> and with a close association of sporting inspirations like that of <span className="font-bold">Havier Zanett, Rohit Sharma, R. Ashwin, and Ravi Shashtri.</span></p>
            <h1 className="text-center md:mt-12 mt-4  ml-20 md:ml-0 rounded-3xl p-5   text-white bg-orange-600  w-[175px] h-[52px] font-roboto font-medium text-xs">SIGN UP NOW</h1>
        </div>

       
    </div>
    
    
    
    </>
  )
}

export default Team