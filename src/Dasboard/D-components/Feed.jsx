import React from 'react'
import TweetTab from './TweetTab'
import './Feed.css'
import { Context } from '../../Context/Context'
import Post from './Post'

function Feed() {

  const {postData , SetPostData, initialData, SetInitialData} = React.useContext(Context)

  
  return (
    <div className='feed'>

      <div className='feed-header'>
        <TweetTab />
      </div>

      { 
      postData ? 
                postData.map(post => <Post text={post.contents} />) 
              : 
                initialData.map(post => <Post text={post.contents} />)} 
    
    </div>
  )
}

export default Feed