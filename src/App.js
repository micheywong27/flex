import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import NutritionFeed from './NutritionFeed';
import PhysicalActivityFeed from './PhysicalActivityFeed';
import UserProfile from './UserProfile';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <NavBar />
        <NutritionFeed />
        <PhysicalActivityFeed />
        <UserProfile />
      </div>
    )
  }
}

export default App;
