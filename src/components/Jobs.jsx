import React from 'react';
import Image from 'next/image'
import adobe from "../../public/images/adobe.png";
import MarcedexBenz from "../../public/images/Marcedez Bens.png";
import spotify from "../../public/images/spotify.png";
import Ebay from "../../public/images/Ebay.png"
import  dropBox from "../../public/images/DropBox.png"
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

      <div className="px-32 py-12 flex gap-12 w-[1200px] ">
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
  )
}

export default Jobs
