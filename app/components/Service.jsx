import React from 'react'

const Service = () => {
  return (
    <div className='rounded-xl p-8 border-gray-300 relative border backdrop-blur-xl h-[580px] flex flex-col'>
      <h4 className='text-black text-center text-xl font-semibold mb-8'>Web Design</h4>
      <hr className='w-full h-[1px] bg-gray-200' />
      <ul className='flex flex-col gap-4 mx-auto text-left mt-16 flex-1 w-full items-center h-full text-lg'>
        <li>Progettazione</li>
        <li>Realizzazione</li>
        <li>Manutenzione</li>
        <li>Tema Wordpress</li>
      </ul>
      <button className='w-full p-3 rounded-full bg-black mt-auto text-white font-semibold'>More Info</button>
    </div>
  )
}

export default Service