import React from 'react';
import Image from 'next/image'
import adobe from "../../public/images/adobe.png";
import MarcedexBenz from "../../public/images/Marcedez Bens.png";
import spotify from "../../public/images/spotify.png";
import Ebay from "../../public/images/Ebay.png"
import  dropBox from "../../public/images/DropBox.png"
import Rating from "../../public/images/Rating.png"
import Airbnb from "../../public/images/Airbnb.png"
import Micrsoft from "../../public/images/Microsoft Logo.png";


import { CiLocationOn } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";




const Jobs = () => {
  return (
    <div>
      <div className="bg-white px-32  flex justify-between ">
        <h1 className="w-[280px] font-manrope font-semibold text-4xl">New jobs daily you might love</h1>
        <div className="flex items-center gap-4">
            <h1>Job Category :</h1>
            <select className="p-2 border rounded outline-none">
                <option value="option1" className="outline-none"> internet & technology</option>
            </select>
        </div>
      </div>

      <div className="px-32 py-6 flex gap-12 w-[1200px] ">
        {/* card 1 */}
        <div className="mt-24 w-[280px] bg-white shadow-md border p-4 border-gray-200">
            <div className="flex justify-between items-center ">
                <div className="flex gap-2 items-center">
                    <Image className="w-6 h-6" src={adobe} alt="adobe"/>
                    <h1 className="text-sm">Adobe</h1>
                </div>
                <h2 className="text-[#B3B1B7] text-sm">3 days ago</h2>
            </div>
            <h2 className="text-sm mt-6 font-bold ">Sales engineer,Application modernazation,
             Healthcare , Google Cloud </h2>
             <div className="flex gap-2 mt-12">
                <h1 className="text-sm flex gap-2 items-center"><CiLocationOn className=" text-[#76747a] "/> San Jose, CA</h1>
                <h1 className="text-sm flex gap-2 items-center"> <CiTimer className=" text-[#76747a] "/> Full-time</h1>
             </div>
        </div>
        {/* card 2 */}
        <div className="mt-24 w-[280px] bg-white shadow-md border p-4 border-gray-200">
            <div className="flex justify-between items-center ">
                <div className="flex gap-2 items-center">
                    <Image className="w-6 h-6" src={MarcedexBenz} alt="adobe"/>
                    <h1 className="text-sm">Mercedes-Benz</h1>
                </div>
                <h2 className="text-[#B3B1B7] text-sm">3 days ago</h2>
            </div>
            <h2 className="text-sm mt-6 font-bold ">Sales engineer,Application modernazation,
             Healthcare , Google Cloud </h2>
             <div className="flex gap-2 mt-12">
                <h1 className="text-sm flex gap-2 items-center"><CiLocationOn className=" text-[#76747a] "/> Aurora, GA</h1>
                <h1 className="text-sm flex gap-2 items-center"> <CiTimer className=" text-[#76747a] "/> Full-time</h1>
             </div>
        </div>
         {/* card 2 */}
         <div className="mt-24 w-[280px] bg-white shadow-md border p-4 border-gray-200">
            <div className="flex justify-between items-center ">
                <div className="flex gap-2 items-center">
                    <Image className="w-6 h-6" src={dropBox} alt="adobe"/>
                    <h1 className="text-sm">Dropbox</h1>
                </div>
                <h2 className="text-[#B3B1B7] text-sm">3 days ago</h2>
            </div>
            <h2 className="text-sm mt-6 font-bold ">Sales engineer,Application modernazation,
             Healthcare , Google Cloud </h2>
             <div className="flex gap-2 mt-12">
                <h1 className="text-sm flex gap-2 items-center"><CiLocationOn className=" text-[#76747a] "/> Lowel, MA</h1>
                <h1 className="text-sm flex gap-2 items-center"> <CiTimer className=" text-[#76747a] "/> Full-time</h1>
             </div>
        </div>
        </div>

        {/* second divition */}
        <div className="px-32 py-0 flex gap-12 w-[1200px] ">
         {/* card 1 */}
         <div className=" h-[420px] w-[280px] bg-white shadow-md border p-4 border-gray-200">
            <div className="flex justify-between items-center ">
                <div className="flex gap-2 items-center">
                    <Image className="w-6 h-6" src={spotify} alt="adobe"/>
                    <h1 className="text-sm">spotify</h1>
                </div>
                <Image className="bg-white" src={Rating} alt="rating"/> 
            </div>
            <div className="flex gap-2 mt-12">
                <h1 className="text-sm flex gap-2 items-center"><CiLocationOn className=" text-[#76747a] "/> Stockhom, Sweden</h1>
                <h1 className="text-sm flex gap-2 items-center"> <CiTimer className=" text-[#76747a] "/> Full-time</h1>
             </div>
            <h2 className="text-sm mt-12 font-bold ">Sales engineer,Application modernazation,
             Healthcare , Google Cloud ,Sales engineer,Application modernazation,
             Healthcare , Google Cloud Sales engineer,Application modernazation,
             Healthcare , Google Cloud</h2>

             <h2 className="mt-20 text-xs "> 5 job openning <span className=" text-orange-500 font-semibold underline">Apply now </span> </h2>
            
        </div>
        {/* card 2 */}
        <div>
        <div className=" w-[280px] h-[220px] bg-white shadow-md border p-4 border-gray-200">
            <div className="flex justify-between items-center ">
                <div className="flex gap-2 items-center">
                    <Image className="w-6 h-6" src={Micrsoft} alt="adobe"/>
                    <h1 className="text-sm">Microsof</h1>
                </div>
                <h2 className="text-[#B3B1B7] text-sm">3 days ago</h2>
            </div>
            <h2 className="text-sm mt-6 font-bold ">G-suite specialsit , Google cloud  customer Engineering </h2>
             <div className="flex gap-2 mt-12">
                <h1 className="text-sm flex gap-2 items-center"><CiLocationOn className=" text-[#76747a] "/> San Jose, CA</h1>
                <h1 className="text-sm flex gap-2 items-center"> <CiTimer className=" text-[#76747a] "/> Full-time</h1>
             </div>
        </div>
        {/* 2 */}
        <div className=" h-[220px] mt-3 w-[280px] bg-white shadow-md border p-4 border-gray-200">
            <div className="flex justify-between items-center ">
                <div className="flex gap-2 items-center">
                    <Image className="w-6 h-6" src={Ebay} alt="adobe"/>
                    <h1 className="text-sm">Ebay</h1>
                </div>
                <h2 className="text-[#B3B1B7] text-sm">3 days ago</h2>
            </div>
            <h2 className="text-sm mt-6 font-bold ">Sales engineer,Application modernazation,
             Healthcare , Google Cloud </h2>
             <div className="flex gap-2 mt-12">
                <h1 className="text-sm flex gap-2 items-center"><CiLocationOn className=" text-[#76747a] "/> San Jose, CA</h1>
                <h1 className="text-sm flex gap-2 items-center"> <CiTimer className=" text-[#76747a] "/> Full-time</h1>
             </div>
        </div>

        </div>
         {/* card 2 */}
         <div>

         <div className="mt-0 h-[220px] w-[280px] bg-white shadow-md border p-4 border-gray-200">
            <div className="flex justify-between items-center ">
                <div className="flex gap-2 items-center">
                    <Image className="w-6 h-6" src={Airbnb} alt="adobe"/>
                    <h1 className="text-sm">Airbnb</h1>
                </div>
                <h2 className="text-[#B3B1B7] text-sm">3 days ago</h2>
            </div>
            <h2 className="text-sm mt-6 font-bold ">Brand marketting Manager Servise Portfolio </h2>
             <div className="flex gap-2 mt-12">
                <h1 className="text-sm flex gap-2 items-center"><CiLocationOn className=" text-[#76747a] "/> Lowel, MA</h1>
                <h1 className="text-sm flex gap-2 items-center"> <CiTimer className=" text-[#76747a] "/> Full-time</h1>
             </div>
        </div>

        <div className="mt-12 h-[120px] w-[280px] bg-white   p-4">
            <h1 className="text-8xl">148+</h1>
            <h2 className="text-gray-500 text-md mt-4 font-semibold">daily jobs : <span className="underline text-black">Explore more</span></h2>
            
        </div>
        {/* s */}
        </div>

        </div>
       
      
    </div>
  )
}

export default Jobs
