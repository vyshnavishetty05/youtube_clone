import React from 'react'
//THIS HAS RECURRSION AND HOC CONCEPT
const CommentsContainer = () => {
  //below is the hardcoded data to get the comments data required, it is ARRAY OF OBJECTS
  const commentsData = [
    {
      name:'Vyshnavi',
      text:'This is such a cool video',
      replies: [
        {
          name:'Akshay',
          text:'This is such a cool video',
          replies: [
            {
              name:'Tina',
              text:'This is such a cool video',
              replies: [
                {
                  name:'Ritu',
                  text:'This is such a cool video',
                  replies: [
                    {
                      name:'Pavani',
                      text:'This is such a cool video',
                      replies: [],
                    }
                  ],
                },
                {
                  name:'Vyshnavi',
                  text:'This is such a cool video',
                replies: [],
                }
              ],
            },
              {
                name:'Vyshnavi',
                text:'This is such a cool video',
              replies: [],
            }
          ],
        }
      ],
    },
    {
      name:'alekhya',
      text:'This is such a cool video',
      replies: [
        {
          name:'sravani',
          text:'This is such a cool video',
          replies: [
            {
              name:'varun',
              text:'This is such a cool video',
              replies: [
                {
                  name:'Shravan',
                  text:'This is such a cool video',
                  replies: [],
                }
              ],
            }
          ],
        }
      ],
    },
    {
      name:'ashok',
      text:'This is such a cool video',
      replies: [
        {
          name:'vasantha',
          text:'This is such a cool video',
          replies: [],
        }
      ],
    },
    {
      name:'Siddu',
      text:'This is such a cool video',
      replies: [],
    },
    {
      name:'Akki',
      text:'This is such a cool video',
      replies: [],
    },
    {
      name:'Deepu',
      text:'This is such a cool video',
      replies: [],
    }
  ];
const Comment = ({data})=>{
  const {name, text, replies} = data;
return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
     <img alt="userIcon" className='h-12 w-12' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
     <div className='px-3'>
      <p className='font-bold'>{name}</p>
      <p>{text}</p>
     </div>

  </div>
};
const CommentList = ({comments})=>{
  return comments.map((comment,index)=>(
    <div key={index} >
     <Comment data={comment}/>
     <div className='pl-5 border border-l-black ml-5'>
      <CommentList comments={comment.replies}/>
     </div>
     </div>
  ))
}
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold mb-3'>Comments:</h1>
      {/* <Comment data={commentsData[0]}/> */}
      <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer