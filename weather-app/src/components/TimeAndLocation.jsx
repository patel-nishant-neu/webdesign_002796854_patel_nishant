import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>

            <p className='text-white text-xl font-light'>
                Tuesday, 31 May 2022 | Local time: 12:46 PM
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                Boston, MA
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation