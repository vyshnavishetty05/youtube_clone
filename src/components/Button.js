import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 py-1 mx-2 rounded-lg bg-gray-300 w-auto'>{name}</button>
    </div>
  )
}

export default Button