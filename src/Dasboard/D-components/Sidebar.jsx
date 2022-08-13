import React from 'react'
import SBoption from './SBoption';
import './Sidebar.css'
import {useNavigate} from "react-router-dom"
import { useContext } from 'react';

import icon from '../../assets/icon-remote.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

import { Context } from '../../Context/Context';

function Sidebar() {

  const Logoutnavigate = useNavigate();
  const {userData , SetUserData} = useContext(Context)

  function handleLogout(){
    Logoutnavigate('/')
    
  }


  return (
    <div className='Sidebar'>
 
        <img className='sidebar-icon' src={icon} alt="icon" />

        <SBoption Icon={HomeIcon} text="Home" />
        <SBoption Icon={SearchIcon} text="Search" />
        <SBoption Icon={NotificationsNoneIcon} text="Notifications" />
        <SBoption Icon={MailOutlineIcon} text="Messages" />
        <SBoption Icon={BookmarkBorderIcon} text="Bookmark" />
        <SBoption Icon={PermIdentityIcon} text="Profile" />
        <SBoption Icon={MoreHorizIcon} text="More" />

        <Button className='Logout' onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Sidebar