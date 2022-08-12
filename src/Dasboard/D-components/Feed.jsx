import React from 'react'
import TweetTab from './TweetTab'
import './Feed.css'
import { Context } from '../../Context/Context'

function Feed() {

  const {postData , SetPostData} = React.useContext(Context)

  const postElements = postData.map(post => <h1>{post.contents}</h1>)
  return (
    <div className='feed'>
        <TweetTab />
        {postElements} 
    </div>
  )
}

export default Feed