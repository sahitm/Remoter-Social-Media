import React from 'react'
import TweetTab from './TweetTab'
import './Feed.css'
import { Context } from '../../Context/Context'
import Post from './Post'

function Feed() {

  const {postData , SetPostData, initialData, SetInitialData} = React.useContext(Context)
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

  
  return (
    <div className='feed'>

      <div className='feed-header'>
        <TweetTab />
      </div>

      { 
      postData ? 
                shuffle(postData).map(post => <Post key={post.postID} text={post} />) 
              : 
                initialData.map(post => <Post key={post.postID}  text={post} />)} 
    
    </div>
  )
}

export default Feed