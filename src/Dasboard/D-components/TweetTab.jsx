import React from 'react'
import './TweetTab.css'

import { Avatar, Button } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import MoodIcon from '@mui/icons-material/Mood';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function TweetTab() {
  return (
    <div className='TweetTab'>
        <Avatar />
        <div className='pictureInput'>
            <input className='tweetInput' placeholder="What's Happening"/>
            <hr></hr>
            <div className='optionsButton'>
                <div className='tweetTab--icons'>
                    <InsertPhotoIcon />
                    <GifBoxIcon />
                    <PollIcon />
                    <MoodIcon />
                    <LocationOnIcon />
                </div>
                
                <Button className='tweetBtn'>Post</Button>
            </div>
        </div>
    </div>
  )
}

export default TweetTab