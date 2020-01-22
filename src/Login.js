import React from 'react';
import UserProfile from './UserProfile';

class Login extends React.Component{
    state ={
        isLoggedIn: false
    }

    onSubmit=()=>{
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render(){
        return(
        this.state.isLoggedIn ? 
        <UserProfile />
        :
            (<div className="login">
                <form onSubmit={this.onSubmit}>
                    <h2>Log In:</h2>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    <button>Submit</button>
                </form>

                <div>
                    <h4>Create a new account</h4>
                </div>
            </div>)
        )
    }
}
export default Login