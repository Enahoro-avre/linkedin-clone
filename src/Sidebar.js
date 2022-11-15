import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import profile from "./image/profile.jpg"
import background from "./image/background.jpg"

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src={background} alt=''/>
            <Avatar className='sidebar__avatar'/>
            <h2>Avre Enahoro</h2>
            <h4>enahoroavre@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2.543</p>
            </div>
            <div className='sidebar__stat'>
                <p>Who viewed me</p>
                <p className='sidebar__statNumber'>4,543</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('react')}
            {recentItem('programming')}
            {recentItem('software engineering')}
            {recentItem('design')}
            {recentItem('developer')}
                
        </div>
    </div>
  )
}

export default Sidebar