import React from 'react';
import { Link } from 'react-router-dom';
import './css/SideBar.css'

const SideBar = (username) => {

  return(
    <div className='sidebar-outer'>
      <ul>
        <li><Link to='/user'>Username</Link></li>
        <li>Villager Name</li>
        <li>Island Name</li>
        <li>Community Name</li>
        <li>Switch FC</li>
        <li>Wishlists</li>
        <li>User Catalog</li>
      </ul>
    </div>
  )
}

export default SideBar;