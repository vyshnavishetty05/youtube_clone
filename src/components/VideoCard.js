import React from 'react'

const VideoCard = ({ info }) => {
    // console.log(info);

    const { snippet, statistics }= info;
    const {channelTitle, thumbnails, title} = snippet;
  return (
    <div className='p-3 m-4 w-72 h-auto shadow-lg'>
        <img className='rounded-lg' src={thumbnails?.medium?.url} alt="video"/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount} Views</li>
        </ul>
    </div>
  );
};
//BELOW IS THE EXAMPLE OF HOC IN WHICH WE MAKE A SLIGHT MODIFICATION OF EXISTING COMPONENT AND RENDER WHEREEVER ITS NEEDED, LIKE AN AD VIDEO IN YOUTUBE

export const AdVideoCard = ({info})=>{
return <div className='p-1 m-1 border border-red-600'><VideoCard info={info}/></div>
}

export default VideoCard;