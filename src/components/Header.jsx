import React from 'react'
import Oval from '../../public/images/Oval.svg'
import pattern from '../../public/images/ovalHeaderpattern.svg';
import headerImage from '../../public/images/Header Image.png'
import Image from 'next/image'

const Header = () => {
  return (
    <>
    
    <div className=" bg-[#576867] text-white h-screen ">
      <div>
        <div>
            {/* nav */}

            <div className="flex pt-8 px-2  items-center m-auto relative">
            <Image src={Oval} alt="logo"  className=""/>

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
            <div className=" flex">
                <div className="mt-52 ml-32">
                    <h2 className=" font-manrope font-semibold text-7xl w-[450px]">Find the Job</h2>
                    <h2 className="font-manrope font-semibold text-7xl w-[680px] ">that Fits Your Life</h2>
                    <p className="mt-6 text-md font-regular w-[600px]">Millions of people are searching for jobs, salary information, company reviews,
                      and interview questions. See what others are looking for on Oval today.</p>

                    <div className= "  mt-24">
                      <div>
                        <button className=" bg-white text-black text-sm px-2 py-1">JOBS</button>
                        <button className=" bg-gray-400  text-black  text-sm px-2 py-1">EMPLOYERS</button>
                      </div>
                      <div className="">
                        <input className="p-4 text-gray-400 border-r-2 outline-none" type="text" placeholder="Job title or keyword " />
                        <input className="p-4 text-gray-400 outline-none relative max-w-fit w-[400px]" type="text" placeholder=" country or city " />
                        <button className="p-2  bg-orange-500 absolute mt-2 left-[548px] ">Search</button>
                      </div>
                    </div>
                </div>
                <div>
                  <div className="absolute -right-0 top-14">
                    <Image src={pattern} alt="pattern"/>
                  </div>
                  <div className="relative top-28 left-[30.8px] inset-4">
                    <Image src={headerImage} alt="headerImage"/>
                  </div>
                    
                </div>
            </div>
             {/* search */}
            
             

            </div>
            

           
        </div>
      </div>
    </div>
    <div className="bg-[#D7E5E2] h-[240px] w-full">
        <div className="pt-12">
          {/* <h1 className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id laborum dicta quam quasi quibusdam sed e
              veniet beatae deserunt, nobis fugit culpa mollitia nostrum expedita, autem suscipit! Corporis v
              elit earum sint.
          </h1> */}
          <div className="mt-12 px-32 flex gap-12">
          <div className="">
            <h1>Trending Searches</h1>
          </div>
          <div className="grid grid-rows-4 w-[400px] gap-12">
            <h1>work from home</h1>
            <h1>No experience</h1>
            <h1>remote work</h1>
            <h1>health care job</h1>
            <h1>online job</h1>
            <h1>no life</h1>
          </div>

          </div>
          
        </div>

    </div>


    </>
  )
}

export default Header
