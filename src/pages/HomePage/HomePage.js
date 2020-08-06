import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import './HomePage.css'

const HomePage = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      var params = window.location.search.substr(1).split('&');
      for(var i = 0; i < params.length; i++){
        var param = params[i].split('=');
        switch(param[0]){
          case 'user':
            setCurrentUser(param[1]);
            break;
          default:
            console.log('Unknown param: ', param[0], ': ', param[1])
            break;
        }
      }
    }, 3000)
  }, []);

  return(
    <div className='page'>
      <div className='header'>
        <Header />
      </div>
      <div className='content-body'>
        <div className='content-sidebar'>
          <SideBar
            username = {(currentUser) ? currentUser : ""}
        />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default HomePage;