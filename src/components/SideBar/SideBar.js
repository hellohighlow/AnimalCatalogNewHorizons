import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'querystring';
import './SideBar.css'

const SideBar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let prams = window.location.search.substr(1);
    let user = queryString.parse(prams, '&', '=');
    setTimeout(() => {
      fetch('/api/findOne',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          db: "users",
          collection: "standard",
          query: user
        })
      })
      .then(res => res.json())
      .then(async function(res) {
        setCurrentUser(res);
      })
      .catch((e) => {
        console.error('Error in fetch /api/findOne: ', e)
      })
    }, 1000)
  }, [])


  return(
    <div className='sidebar-outer'>
      <div className='sidebar-nav'>
        <ul className='sidebar-nav-ul'>
          <li><Link to='/user'>{(currentUser) ? currentUser.user : "User Name"}</Link></li>
          <li>{(currentUser) ? currentUser.villager_name : "Villager Name"}</li>
          <li>{(currentUser) ? currentUser.island_name : "Island Name"}</li>
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