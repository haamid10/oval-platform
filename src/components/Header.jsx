import React from 'react'
import Oval from '../../public/images/Oval.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className=" bg-[#576867] text-white h-screen ">
      <div>
        <div>
            {/* nav */}

            <div className="flex pt-8 px-2 ">
                <Image src={Oval} alt="logo"  className="mr-12"/>
                <div className="flex gap-12">
                <h2 className="  font-inter text-xl">For job seekers</h2>
                <h2 className="font-inter text-xl">For Employers</h2>
                </div>

            </div>
            {/* hero */}
            <div className="mt-32 ml-32">
                <div>
                    <h2 className=" font-manrope text-7xl w-[450px]">Find the Job</h2>
                    <h2 className="font-manrope text-7xl w-[580px] ">that Fits Your Life</h2>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
