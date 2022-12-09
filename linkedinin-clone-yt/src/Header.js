import React from 'react'
import './Header.css'
import SearchIcon from 'd:/GitHub/linkedin-clone-yt/node_modules/@material-ui/icons/Search';
function Header() {
  return (
    <div className="Header">
      <h1>This is the header</h1>

      <div className="header__left">
        <img src='' alt=''></img>

        <div className="header__search">
            <SearchIcon />
            <input type="text" />
        </div>

      </div>

      <div className="header__right">


      </div>
    
    

    </div>
  )
}

export default Header