import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from 'd:/GitHub/linkedin-clone-yt/node_modules/@material-ui/icons/Search';
import HomeIcon from 'd:/GitHub/linkedin-clone-yt/node_modules/@material-ui/icons/Home';
import SupervisorAccountIcon from 'd:/GitHub/linkedin-clone-yt/node_modules/@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from 'd:/GitHub/linkedin-clone-yt/node_modules/@material-ui/icons/BusinessCenter';
import ChatIcon from 'd:/GitHub/linkedin-clone-yt/node_modules/@material-ui/icons/Chat';
import NotificationsIcon from 'd:/GitHub/linkedin-clone-yt/node_modules/@material-ui/icons/Notifications';

function Header() {
  return (
    <div className="header">
     

      <div className="header__left">
        <img src=".linkedinin-clone-yt/src/linkedin.jpg" alt="" />

        <div className="header__search">
            <SearchIcon />
            <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon ={HomeIcon} title='Home'/>
        <HeaderOption Icon ={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon ={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon ={ChatIcon} title='Messaging'/>
        <HeaderOption Icon ={NotificationsIcon} title='Notification'/>
        <HeaderOption avatar ="linkedinin-clone-yt/src/me.jpg" title='Me' />
      </div>
    
    

    </div>
  )
}

export default Header