import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import Shimmer from './Shimmer';
import VideoCard,{AdVideoCard} from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
    useEffect(()=>{
        getVideosList();
    },[]);
    const getVideosList = async ()=>{
        const response = await fetch(YOUTUBE_VIDEOS_API);
        const data= await response.json();
        // console.log(data.items);
        //we need a state variable to loop all these videos so use state variable and we update state to trigger reconciliation process
        setVideos(data?.items);
    };
    // if(videos == []) return <Shimmer/>;
    // if(videos == []) return null;
  return (
    <div className='flex flex-wrap w-3/5'>
    {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos.map((video)=>
      <Link key={video.id} to={"/watch?v="+video.id}>
      <VideoCard info={video}/>
      </Link>
      )}
    </div>
  )
}

export default VideoContainer