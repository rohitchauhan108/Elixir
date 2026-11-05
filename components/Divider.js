import { Import } from 'lucide-react'
import React from 'react'
import Image from 'next/image'


const Divider = () => {
  return (
    <>
     <div className="flex items-start justify-center my-4 px-4">
      {/* Left line */}
      <div className="mt-[74px] w-20 h-[2px] bg-gray-600"></div>

      {/* Logo */}
      <div className="mx-4 flex flex-col items-center">
        <Image
          src="/Assets/logos/elixir-logo-main.png"
          alt="Elixir Far LLP logo"
          width={150} 
          height={150} 
          className="object-contain"
        />
        <span className="mt-1 whitespace-nowrap text-4xl font-semibold leading-tight text-red-700">
          Elixir Far LLP
        </span>
      </div>

      {/* Right line */}
      <div className="mt-[74px] w-20 h-[2px] bg-gray-600"></div>
    </div>

    
    </>
  )
}

export default Divider