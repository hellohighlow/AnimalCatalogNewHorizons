import React, { useEffect, useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';

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
    <div>
      <div>
        <Header />
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }}>
          <SideBar
            username = {(currentUser) ? currentUser : ""}
        />
        </div>
        <div>
          <h2>Welcome {(currentUser) ? currentUser : ""}</h2>
        </div>
      </div>
    </div>
  )
}

export default HomePage;