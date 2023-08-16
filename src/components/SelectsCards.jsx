import React from 'react'

const SelectsCards = (props) => {
  return (
        <div className="relative">
            <img className='object-cover w-full h-full' src={props.img} alt='#' />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900/40">
                <p className='text-white bottom-4 left-4 absolute font-semibold'>{props.text}</p>
            </div>
        </div>
  )
}

export default SelectsCards