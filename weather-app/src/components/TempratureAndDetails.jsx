import React from 'react'
import {UilArrowUp, UilArrowDown, UilTemperatureThreeQuarter, UilTear, UilWind, UilSun, UilSunset} from "@iconscout/react-unicons";

function TempratureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Sunny</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-20'></img>
            <p className='text-5xl'> 38°</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex text-sm items-center justify-center'>
                    <UilTemperatureThreeQuarter size={18} className="mr-1"></UilTemperatureThreeQuarter>
                    Real fell:
                    <span className='font-medium ml-1'>32°</span>
                </div>
                <div className='flex text-sm items-center justify-center'>
                    <UilTear size={18} className="mr-1"></UilTear>
                    Humidity:
                    <span className='font-medium ml-1'>65%</span>
                </div>
                <div className='flex text-sm items-center justify-center'>
                    <UilWind size={18} className="mr-1"></UilWind>
                    Wind:
                    <span className='font-medium ml-1'>11 km/h</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <p className=''> Rise: <span className='font-medium ml-1'>06:45 AM</span></p>
            <p>|</p>

            <UilSunset/>
            <p className=''> Set: <span className='font-medium ml-1'>07:45 PM</span></p>
            <p>|</p>

            <UilArrowUp/>
            <p className=''> High: <span className='font-medium ml-1'>45°</span></p>
            <p>|</p>

            <UilArrowDown/>
            <p className=''> Low: <span className='font-medium ml-1'>25°</span></p>
        </div>

    </div>
  )
}

export default TempratureAndDetails