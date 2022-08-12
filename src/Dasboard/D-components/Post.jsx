import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


function Post({text}) {

  return (
    <div className='post'>
        <div className='post--avatar'>
            <Avatar />
        </div>
        <div className='post--body'>
            <div className='post--header'>
                <h3>
                    {/* {loginvalues.Logusername} <span>@{loginvalues.Logusername}</span> */}
                    <span>@</span>
                </h3>
            </div>
            <div className='post--desc'>
                {text}
            </div>
            <div className='post--footer'>
                <ChatBubbleOutlineIcon />
                <RepeatIcon />
                <FavoriteBorderIcon />
                <ShareIcon />
                <div style={{cursor:"pointer"}}>
                    <DeleteForeverOutlinedIcon color='secondary'/>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Post