import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
<img className='h-9 col-span-1' alt="user-logo" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
<div className='font-bold px-2'>{name}</div>
<div>{message}</div>
    </div>
  )
}

export default ChatMessage;