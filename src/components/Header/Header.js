import React from 'react';
import { Link } from 'react-router-dom';
import { TextInput } from 'carbon-components-react';
import queryString from 'querystring';
import './Header.css'

const Header = () =>{
  let url_params = window.location.search.substr(1);
  let params = queryString.parse(url_params, '&', '=')

  return(
    <header>
      <div className='top-nav'>
        <h2 style={{ display: 'inline-block' }}>
          <Link to='/'>
            <span style={{ color: 'white' }}>Animal Catalog</span>
          </Link>
        </h2>
        <div className='center-nav'>
          <TextInput 
            id='searchField'
            labelText='Search'
            defaultValue='Search'
            style={{ width: '100%', height: '30px' }}
          />
        </div>
        <div className='right-nav' style={{ float: 'right' }}>
          <ul className='right-nav-ul'>
            <div>
              <li className='right-nav-li'>
                <p>Welcome {params.user}</p>
              </li>
              <li className='right-nav-li'>
                <Link to='/user'>
                  <p style={{ color: 'white' }}>My Account</p>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;