import React from 'react'
import Service from './Service'

const Services = () => {
  return (
    <div className='my-32'>
        <h3 className='text-2xl font-semibold mb-8'>Services</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 services'>
            <Service />
            <Service />
            <Service />
        </div>
    </div>
  )
}

export default Services