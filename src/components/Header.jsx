import React from 'react'
import Oval from '../../public/images/Oval.svg'
import pattern from '../../public/images/ovalHeaderpattern.svg';
import headerImage from '../../public/images/Header Image.png'
import Image from 'next/image'

import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <>
    
    <div className=" bg-[#576867] text-white h-screen ">
        <div>
            <div className="flex pt-8 px-2  items-center m-auto relative">
            <Image src={Oval} alt="logo"  className="ml-6"/>

                <div className="flex justify-around  items-center gap-72">
                  <div className="flex gap-12 ml-12 ">
                  <h2 className="  font-inter text-lg">For job seekers</h2>
                  <h2 className="font-inter text-lg">For Employers</h2>
                </div>
                 
                <div className=" gap-12 flex ml-[390px]">
                  <button className="  font-inter text-md">Sign in</button>
                  <button className="font-inter text-md bg-white text-black rounded-md p-2">post job</button>
                </div>
                
                </div>

            </div>
            {/* hero */}
            <div>
                <div className="mt-52 ml-32 flex">
                  <div>
                    <h2 className=" font-manrope font-semibold text-7xl w-[450px]">Find the Job</h2>
                    <h2 className="font-manrope font-semibold text-7xl w-[680px] ">that Fits Your Life</h2>
                    <p className="mt-6 text-md font-regular w-[600px]">
                      Millions of people are searching for jobs, salary information, company reviews,
                      and interview questions. See what others are looking for on Oval today.
                    </p>
                    
                  </div>
                    

                   
                    <div>
                  <div className="absolute -right-0 top-14">
                    <Image src={pattern} alt="pattern"/>
                  </div>
                  <div className="relative -top-28 left-[30.8px] inset-4">
                    <Image src={headerImage} alt="headerImage"/>
                  </div>

                </div>
                
                    
                </div>
             {/* search */}
             <div className= " absolute -bottom-6 left-32">
                      <div>
                        <button className=" bg-white text-black text-sm px-2 py-1">JOBS</button>
                        <button className=" bg-gray-400  text-black  text-sm px-2 py-1">EMPLOYERS</button>
                      </div>
                      <div className="">
                        <input className="p-4 text-gray-400 border-r-2 outline-none w-[400px]" type="text" placeholder="Job title or keyword " />
                        <input className="p-4 text-gray-400 outline-none relative  w-[400px]" type="text" placeholder=" country or city " />
                        <button className="p-2  bg-orange-500 absolute mt-2 left-[708px] ">Find Job</button>
                      </div>
                    </div>
            </div>

      </div>
    </div>
    <div className="bg-[#D7E5E2] h-[240px] w-full">
        <div className="pt-12">
          <div className="mt-12 px-32 flex gap-12">
          <div className="">
            <h1>Trending Searches</h1>
            <span className="underline text-orange-400 test-sm">view more jobs</span>
          </div>
          <div className="grid grid-cols-3   gap-2">
            <h1 className="bg-white text-[#64626A] p-1">work from home</h1>
            <h1 className="bg-white text-[#64626A] p-2">No experience</h1>
            <h1 className="bg-white text-[#64626A] p-2">remote work</h1>
            <h1 className="bg-white text-[#64626A] p-1">health care job</h1>
            <h1 className="bg-white text-[#64626A] p-1">online job</h1>
            <h1 className="bg-white text-[#64626A] p-1">no life</h1>
          </div>

          </div>
          
        </div>
    </div>
    <div className="flex bg-white w-full h-auto py-32 px-32 justify-between items-center gap-6">
          <h1 className=" text-3xl font-manrope text-[#8E8C95] font-bold">How oval Works for you </h1>
          <div className="flex gap-12">
            <h2 className="font-bold flex gap-4 text-lg items-center"> <span className=" text-[#FA6402] text-sm ">1</span> Create Oval profile</h2>
            <h2 className="font-bold flex gap-6 items-center text-lg"> <FaArrowRightLong className="text-[#B3B1B7]"/> <span className=" text-[#FA6402] text-sm ">2</span> Find job you love</h2>
            <h2 className="font-bold flex gap-6 items-center text-lg"> <FaArrowRightLong className="text-[#B3B1B7]"/> <span className=" text-[#FA6402] text-sm ">3</span> Get hired</h2>
          </div>
          <div>
          </div>
    </div>


    </>
  )
}

export default Header;
