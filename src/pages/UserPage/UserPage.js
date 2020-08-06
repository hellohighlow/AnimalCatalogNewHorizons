import React, { useEffect, useState } from 'react';
import { Form, FormLabel, TextInput } from 'carbon-components-react';
import queryString from 'querystring';

import Header from '../../components/Header/Header'

const UserPage = () => {
  const [currentUser, setCurrentUser] = useState({
    user: '',
    villager_name: '',
    island_name: ''
  });
  
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

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Form>
          <div>
            <FormLabel>Username: {currentUser.user}</FormLabel>
          </div>
          <div style={{ display: 'flex' }}>
            <FormLabel>Villager Name: </FormLabel> 
            <TextInput 
              id='villagerNameInput'
              labelText=''
              defaultValue={currentUser.villager_name}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <FormLabel>Island Name: </FormLabel> 
            <TextInput 
              id='islandNameInput'
              labelText=''
              defaultValue={currentUser.island_name}
            />
          </div>
        </Form>
      </div>
    </div>
  )
}

export default UserPage;