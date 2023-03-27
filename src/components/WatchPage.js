import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {closeSideBar} from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    //READ QUERYPARAMS FROM URL AND DISPLAY VIDEO ACCORDINGLY 
    const [searchParams]= useSearchParams();
    console.log(searchParams.get("v"));//SINCE USING ONLY USEPARAMS WILL NOT HELP AS THIS IS AFTER? IN URL( ONLY SMTHNG AFTER "/" IN URL IS SEARCHED IN USEPARAMS) 
    const params=searchParams.get("v");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSideBar())
    },[])
    //here you can aslo call api instead of iframe 
  return (
    <div className='flex flex-col w-full'>
    <div className='px-5 flex'>
      <div>
        <iframe
         width="1050"
         height="550"
        src={"https://www.youtube.com/embed/"+params}
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        </div>
        <div className='w-full'>
          <LiveChat/>
        </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage