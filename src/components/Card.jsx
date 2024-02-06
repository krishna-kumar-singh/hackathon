import React from 'react'
//creating card component.

export function Card({title,content,className}) {
    return (
      <div className={`${className} w-48 rounded-xl border border-gray-700 hover:bg-gradient-to-r from-yellow-100 to-green-300 hover:bg-opacity-70 p-4 transition duration-300 transform hover:scale-105`}>
        <div className='font-bold font-serif text-black text-center mb-2'>
          {title}
        </div>
        <hr className='my-2 border border-teal-300' />
        <div className='text-gray-800'>
          {content}
        </div>
      </div>
    )
  }
export default Card
//hover:bg-gradient-to-r from-yellow-100 to-green-300 hover:bg-opacity-70 p-4 transition duration-300 transform hover:scale-105