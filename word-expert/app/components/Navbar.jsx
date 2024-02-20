import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-300 w-full h-14 fixed flex items-cneter justify-between'>
        
        <div className='divide-x divide-slate-400'>
            <div 
            className='inline-flex items-center justify-center h-full w-36 bg-gray-300 text-black  text-lg border-white hover:bg-gray-400 transition duration-300 cursor-pointer'
            
            >
            Search
            </div>
            <div 
            className='inline-flex items-center justify-center h-full w-36 bg-gray-300 text-black  text-lg hover:bg-gray-400 transition duration-300 cursor-pointer'
            
            >
            My Word
            </div>
        </div>
        
        <div className='flex items-center '>
            <div className='mr-4'>user_name</div>
            <div className='inline-flex items-center justify-center py-2 px-4 mr-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300 cursor-pointer text-lg'>
            Profile
            </div>
        </div>
        
    </div>
  )
}

export default Navbar