import React from 'react'
import TweetTab from './TweetTab'
import './Feed.css'
import { Context } from '../../Context/Context'

function Feed() {

  const {postData , SetPostData} = React.useContext(Context)

  
  return (
    <div className='feed'>
        <TweetTab />
        { postData ? postData.map(post => <h1>{post.contents}</h1>) : <h1></h1>} 
    </div>
  )
}

export default Feed