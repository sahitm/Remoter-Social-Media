import { Avatar } from '@mui/material'
import React, { useEffect } from 'react'
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

  useEffect(() => {
    SetLoggedIn(JSON.parse(localStorage.getItem('loggedIn')))
  }, []);

  localStorage.setItem('postdata',JSON.stringify(postData))

  function delPost(){
    SetPostData(prevPostData => prevPostData.filter(post => post.postID !== text.postID))
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
    SetPostData(postData => postData.map(post => post.postID == text.postID ? {
      ...post,
      contents : `${textInput}`
    } : post     
    ))
    SetIsUpdate(!isUpdate)
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
            <textarea className='post--desc' ref={textRef} onChange={(event) => SetTextInput(event.target.value)} defaultValue={postInput} />
                {/* {postInput}
            </textarea> */}
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