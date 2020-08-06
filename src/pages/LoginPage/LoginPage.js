import React, { Component } from 'react';

class LoginPage extends Component{
    
    componentDidMount(){
        window.location.href = 'http://localhost:3001/api/discord/login'
    }

    render(){
        return(
            <>
            </>
        )
    }
}

export default LoginPage