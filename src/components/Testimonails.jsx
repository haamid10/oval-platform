import React from 'react'
import Image from 'next/image'
import Character from '../../public/images/Group 36.png'
import lady from '../../public/images/Image.png'

const Testimonails = () => {
  return (
    <div className="mt-32">
      <div className="bg-[#f3f2f39a] w-full">
        <div className=" ">
            
            <Image className="" src={Character} alt="character"/>
            <div className="relative">
                <Image className="absolute -top-[800px]   ml-44" src={lady} alt="character"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonails
