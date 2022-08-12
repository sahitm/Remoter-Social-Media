import React, { useContext, useState } from 'react'
import './TweetTab.css'

import { Avatar, Button } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import MoodIcon from '@mui/icons-material/Mood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { nanoid } from 'nanoid'

import { Context } from '../../Context/Context';
import InitialPosts from '../../helpers/InitialPosts';

function TweetTab() {

  const {postData , SetPostData} = useContext(Context)
  const [twtData,SetTwtData] = useState('')

  function handlePost(){
    if(postData.length == 0){

      localStorage.setItem('postdata',JSON.stringify([...InitialPosts]))
      const existingPosts = JSON.parse(localStorage.getItem('postdata'))

      let newPost = {
        postID: nanoid(),
        contents: `${twtData}`,
        postAuthor: 'vikram',
        createdOn: Date.now(), 
        updatedOn: Date.now()
      }

      localStorage.setItem('postdata',JSON.stringify([...existingPosts,newPost]))
      SetPostData(JSON.parse(localStorage.getItem('postdata')))
      console.log(postData) 

    }else{

      let newPost = {
        postID: nanoid(),
        contents: `${twtData}`,
        postAuthor: 'vikram',
        createdOn: Date.now(), 
        updatedOn: Date.now()
      }

      localStorage.setItem('postdata',JSON.stringify([...postData,newPost]))
      SetPostData(JSON.parse(localStorage.getItem('postdata'))) 

    }
  }

  return (
    <div className='TweetTab'>
        <Avatar />
        <div className='pictureInput'>
            <input className='tweetInput' placeholder="What's Happening" onChange={(event) => SetTwtData(event.target.value)}/>
            <hr></hr>
            <div className='optionsButton'>
                <div className='tweetTab--icons'>
                    <InsertPhotoIcon />
                    <GifBoxIcon />
                    <PollIcon />
                    <MoodIcon />
                    <LocationOnIcon />
                </div>
                
                <Button className='tweetBtn' onClick={handlePost}>Post</Button>
            </div>
        </div>
    </div>
  )
}

export default TweetTab