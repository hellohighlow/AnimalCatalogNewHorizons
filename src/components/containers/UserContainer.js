import React from 'react';

const UserContainer = () => {
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

  const getUser = () => {
    return currentUser;
  }

  return(
    <>
    </>
  )

}

module.exports = {
  getUser
}