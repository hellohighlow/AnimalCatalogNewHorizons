import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'querystring';
import './css/SideBar.css'

const SideBar = () => {
  let prams = window.location.search.substr(1);
  let user = queryString.parse(prams, '&', '=');
  console.log(user)


  return(
    <div className='sidebar-outer'>
      <div className='sidebar-nav'>
        <ul className='sidebar-nav-ul'>
          <li><Link to='/user'>{user.user}</Link></li>
          <li>Villager Name</li>
          <li>Island Name</li>
          <li>Community Name</li>
          <li>Switch FC</li>
          <li>Wishlists</li>
          <li>User Catalog</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;