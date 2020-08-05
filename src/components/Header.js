import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextInput } from 'carbon-components-react';
import './css/Header.css'

class Header extends Component{
  render(){
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
              defaultValue='Search'
              style={{ width: '100%', height: '30px' }}
            />
          </div>
          <div className='right-nav' style={{ float: 'right' }}>
            <ul>
              <div>
                <li>
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
}

export default Header;