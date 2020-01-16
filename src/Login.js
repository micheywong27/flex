import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <h2>Log In:</h2>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Login