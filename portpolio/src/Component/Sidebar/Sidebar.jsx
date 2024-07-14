import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar bg-white flex flex-col p-2'>
        <div className='border-b-2 border-gray-400 shadow-md rounded-md p-2'>
            <h1 className='text-xl text-gray-700'>Home</h1>
        </div>
        <div className='border-b-2 border-gray-400 shadow-md rounded-md p-2'>
            <h1 className='text-xl text-gray-700'>Experiences</h1>
        </div>
        <div className='border-b-2 border-gray-400 shadow-md rounded-md p-2'>
            <h1 className='text-xl text-gray-700'>Projects</h1>
        </div>
        <div className='border-b-2 border-gray-400 shadow-md rounded-md p-2'>
            <h1 className='text-xl text-gray-700'>Skills</h1>
        </div>
        <div className='border-b-2 border-gray-400 shadow-md rounded-md p-2'>
            <h1 className='text-xl text-gray-700'>Contact</h1>
        </div>
        <div className='border-b-2 border-gray-400 shadow-md rounded-md p-2'>
            <h1 className='text-xl text-gray-700'>About</h1>
        </div>
    </div>
  )
}
