import React from 'react'
import { iconURLFromCode } from '../services/weatherService'

function Forecast({title, items}) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-2'></hr>

        <div className='flex flex-row items-center justify-between text-white'>

            {items.map((item) => (
                <div className='flex flex-col items-center justify-center'>
                <p className='text-sm'>{item.title}</p>
                <img src={iconURLFromCode(item.icon)} alt='' className='w-12 my-1'/>
                
                <p className='font-medium'>{item.temp !== undefined ? `${item.temp.toFixed()}°` : ''}</p>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default Forecast