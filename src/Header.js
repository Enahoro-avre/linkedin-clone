import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"
import HeaderOption from './HeaderOption'
import Home from "@mui/icons-material/Home"
import SupervisorAccount from "@mui/icons-material/SupervisorAccount"
import  BusinessCenter  from "@mui/icons-material/BusinessCenter"
import Chat from "@mui/icons-material/Chat"
import Notification from "@mui/icons-material/Notifications"
import profile from "./image/profile.jpg"

function Header() {
  return (
    <div className='header'>

        <div className='header__left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt="linkedin icon"/>
            
            <div className='header__search'>
                <SearchIcon/>
                <input type="text" placeholder="Search" />

            </div>

        </div>

        <div className='header__right'>
            <HeaderOption Icon={Home} title="Home"/>
            <HeaderOption Icon ={SupervisorAccount} title="My Network"/>
            <HeaderOption Icon ={BusinessCenter} title="Jobs"/>
            <HeaderOption Icon ={Chat} title="Messaging"/>
            <HeaderOption Icon ={Notification} title="Notifications"/>
            <HeaderOption avatar={profile} title="me"/>

        </div>

    </div>
)
}

export default Header