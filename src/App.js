import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import NutritionFeed from './NutritionFeed';
import PhysicalActivityFeed from './PhysicalActivityFeed';
import UserProfile from './UserProfile';
import Form from './Form'
import Login from './Login'
import { Route, Switch } from 'react-router-dom';

class App extends React.Component{
  state={
    posts: []
  }

  componentDidMount(){
    fetch('http://127.0.0.1:3000/posts')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        posts: data
      })
    })
  }

  render(){
    console.log(this.state.posts)
    return (
      <div className="App">
        <NavBar />
          <Switch>
            <Route path="/form" render={() =>  <Form />}/>
            <Route path="/nutrition" render={() =>  <NutritionFeed />}/>
            <Route path="/physicalactivity" render={() =>  <PhysicalActivityFeed />}/>
            <Route path="/user" render={() => <UserProfile />}/>
            <Route exact path="/" render={() => <Login />} />
          </Switch>
      </div>
    )
  }
}

export default App;
