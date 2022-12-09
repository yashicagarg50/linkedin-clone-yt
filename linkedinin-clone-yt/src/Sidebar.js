import React from "react";
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';
function Sidebar() {
  const recentItem = (topic) => {
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">
          <p>(topic)</p>   
        </span>
    </div>
  }
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="linkedinin-clone-yt/src/bg.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Yashica Garg</h2>
        <h4>yashicagarg50@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  )
};

export default Sidebar
