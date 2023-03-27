import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { GenerateRandomName, MakeRandomStr } from '../utils/helper';
import ChatMessage from './ChatMessage'

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMsgStack = useSelector((store)=>store.chat.messages);
    const [LiveMessage, setLiveMessage]=useState("");
    useEffect(()=>{
       const i = setInterval(()=>{
        //API POLLING
        console.log("API POLLING");
        dispatch(addMessage({
            name: GenerateRandomName(),
            message: MakeRandomStr(20)+"🚀",
        })
        );
       },1500);
       return ()=>clearInterval(i);
    },[]);

  return (
    <>
    <div className='ml-2 p-2 border border-black h-[550px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
       {chatMsgStack.map((c,index)=>(
         <ChatMessage key={index} name={c.name} message={c.message}/>
       ))}
    </div>
    {/* WE ARE USING FORM HERE, TO MAKE ENTER KEY WORK AND MSG SHOULD SUBMIT, BUT ON SUBMIT THE PAGE RELOADS TO PREVENT THAT WE USE PREVENTDEFAULT */}
    <form className='p-2 mx-2 w-full border border-black' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(
            addMessage({
                name: "You",
                message: LiveMessage,
            })
        );
        setLiveMessage("");
    }}>
        <input className='px-2 w-80' type="text" value={LiveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat;