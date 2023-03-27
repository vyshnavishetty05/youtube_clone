import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
    const [searchQuery, setsearchQuery]= useState("");
    const [suggestionList, setsuggestionList]= useState([]);
    const [showList, setshowList]= useState(false);
    const cacheResultVar = useSelector((store)=>store.search);
    //HERE BASICALLY IDEA IS TO CALL USEEFFECT AFTER EVERY KEY STROKE AND DECLINE API CALL WHEN TIME BETWEEN 2 KEYSTROKE IS <200MS OF TIME 
    useEffect(()=>{
      console.log(searchQuery);
      if(cacheResultVar[searchQuery]){
        //IF RESULT IS ALREADY CACHED ONLY SHOW SUGGESTION AND DONT MAKE API CALL
        setsuggestionList(cacheResultVar[searchQuery]);
      }
      else{
      const timer = setTimeout(()=>getsearchSuggestion(),200);
      // getsearchSuggestion();
      return() => {
        //THIS WILL BE CALLED DURING UNMOUNTING PHASE OR COMPONENET DESTRUCTION PHASE I.E., WHEN COMPONENT IS ABOUT TO RE-RENDER DUE TO CHANGE IN SEARCHQUERY
        clearTimeout(timer);
        //IF YOU WONT CLEAR TIMER IT WILL SET NEW TIMER EVEYTIME USEEFFECT IS CALED
      }
    }
    },[searchQuery]);
/**
 * key - i
 *  - rneder component
 *  - useffect();
 *  - start timer => make api call after 200ms
 * 
 * key - ip
 *  - destroy the component(useeffect return method)
 *  - re-render component
 *  -useffect();
 *  - start timer => make api call after 200ms
 */

/**
 * searchCache ={
 * "iphone":  {"iphone","iphone 13","iphone 14"}, 
 * }
 * 
 */
    const getsearchSuggestion = async ()=>{
      console.log('api called -  '+searchQuery);
      const response = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
      const data= await response.json();
      setsuggestionList(data[1]);
      // console.log(data[1]);
      dispatch(
        cacheResults({
          //we are using [] for searchquery as this is the DYNAMIC KEY AND WE ARE STORING API RESPONSE AS CACHE RESULT
          [searchQuery]: data[1]
        })
      )
    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-8 cursor-pointer' onClick={()=>toggleMenuHandler()} alt="hamburger-menu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"/>
            <a href='/'>
            <img className='mx-2 h-8' alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
            </a>
        </div>
        <div>
        <div className='col-span-10'>
            <input type="text" value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}
            onFocus={()=>setshowList(true)}
            onBlur={()=>setshowList(false)}
             className='w-1/2 px-12 border border-gray-400 h-[40px] rounded-l-full'/>
            <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
        </div>
        {suggestionList.length!==0 && showList && <div className='absolute bg-white py-2 px-2 w-[20rem] shadow-lg border border-gray-400'>
        <ul>
            { suggestionList.map((s)=>(  
                <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>
            ))}
          </ul>
        </div>}
        </div>
        <div>
          <img className='h-9 col-span-1' alt="user-logo" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        </div>
    </div>
  )
}

export default Head