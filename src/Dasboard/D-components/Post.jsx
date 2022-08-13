import { Avatar } from '@mui/material'
import React from 'react'
import { useRef } from 'react'
import './Post.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import {Button} from '@mui/material';
import {Context} from '../../Context/Context'


function Post({text}) {

  const {postData , SetPostData, loggedIn, SetLoggedIn} = React.useContext(Context)  
  console.log(text.postAuthor) 
  SetLoggedIn(JSON.parse(localStorage.getItem('loggedIn')))
  console.log(loggedIn)
  localStorage.setItem('postdata',JSON.stringify(postData)) 

  function delPost(){
    SetPostData(prevPostData => prevPostData.filter(post => post.postID !== text.postID))
    console.log('clicked')
    console.log(postData)
    localStorage.setItem('postdata',JSON.stringify([...postData]))
  } 
  
  const testContent = text.contents
  const [postInput,SetPostInput] = React.useState(testContent)
  const [isUpdate, SetIsUpdate] = React.useState(false)
  const [textInput , SetTextInput] = React.useState('')
  const textRef = useRef() 

  function updatePost(){
    {!isUpdate && textRef.current.focus()}
    SetIsUpdate(!isUpdate)
  }

  function update(){
    console.log(textInput)
    SetPostData(postData => postData.map(post => post.postID == text.postID ? {
      ...post,
      contents : `${textInput}`
    } : post     
    ))
    console.log(postData)
    SetIsUpdate(!isUpdate)
    
    console.log(text.postAuthor)
  }

  return (
    <div className='post'>
        <div className='post--avatar'>
            <Avatar />
        </div>
        <div className='post--body'>
            <div className='post--header'>
                <h3>
                    {text.postAuthor} <span>@{text.postAuthor}</span>
                </h3>
            </div>
            <textarea className='post--desc' name="" id="" cols="40" rows="4" ref={textRef} onChange={(event) => SetTextInput(event.target.value)}>
                {postInput}
            </textarea>
            { isUpdate && <Button onClick={update}>Update</Button>}
            <div className='post--footer'>
                <ChatBubbleOutlineIcon />
                <RepeatIcon />
                <FavoriteBorderIcon />
                <ShareIcon />
                {loggedIn == text.postAuthor && <div style={{cursor:"pointer"}} onClick={updatePost}>
                    <EditIcon color='primary'/>
                </div>}
                {loggedIn == text.postAuthor && <div style={{cursor:"pointer"}} onClick={delPost}>
                    <DeleteForeverOutlinedIcon color='secondary'/>
                </div>}

            </div>
        </div>
        
        
    </div>
  )
}

export default Post