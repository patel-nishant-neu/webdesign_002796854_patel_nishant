import React from 'react'
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import { UilSearchAlt, UilMapMarker } from '@iconscout/react-unicons';


export default function Inputs() {
  return (
  <div className='flex flex-row justify-center my-6'>
    <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input type='text' placeholder='Search for city...' className='text-xl p-2 w-full shadow-xl rounded-md focus:outline-none capitalize placeholder:lowercase'/>
        <UilSearchAlt  size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        <UilMapMarker size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
    </div>
    <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-xl text-white'>°C</button>
        <p className='text-xl text-white mx-3'> |</p>
        <button name='imperial'  className='text-xl text-white'>°F</button>
    </div>
  </div>
  )
}
