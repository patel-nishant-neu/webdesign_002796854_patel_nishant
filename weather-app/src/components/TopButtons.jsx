import React from 'react'

function TopButtons() {

    const cities = [
        {
            id:0,
            title:'Boston'
        },
        {
            id:1,
            title:'Seatle'
        },
        {
            id:2,
            title:'Silicon Vally'
        },
        {
            id:3,
            title:'Vancover'
        },
        {
            id:4,
            title:'Toronto'
        }
    ]
  return (<div className='flex items-center justify-around my-6'>
    {cities.map((city) => (
        <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
    ))}
  </div>)
}

export default TopButtons