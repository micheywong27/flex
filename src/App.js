import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import NutritionFeed from './NutritionFeed';
import ActiveFeed from './ActiveFeed';
import UserProfile from './UserProfile';
import Form from './Form'
import Login from './Login'
import { Route, Switch } from 'react-router-dom';

class App extends React.Component{
  state={
    posts: [],
    nutritionPosts: [],
    activityPosts: [],
    content: ''
  }

  // can't call functions to filter b/c posts have to complete this func 1st
  componentDidMount(){
    fetch('http://127.0.0.1:3000/posts')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        posts: data,
        nutritionPosts: data.filter(post => post.nutrition === true),
        activityPosts: data.filter(post => post.nutrition === false)
      })
    })
  }

  addPost=(post)=>{  
      this.setState({
        posts: [...this.state.posts, post],
        
        nutritionPosts: post.nutrition ? [...this.state.nutritionPosts, post] : this.state.nutritionPosts , 
        activityPosts: !post.nutrition ? [...this.state.activityPosts, post] : this.state.activityPosts
      }) 
    }
  
  //*********** when posting, it's not setting in a true or false value */
  filter=(e, nutrition)=>{
    e.preventDefault()
    let { content } = this.state;
        fetch('http://127.0.0.1:3000/posts', {
          method: 'POST',
          headers:{ 'Content-Type': 'application/json',
                    'Accept': 'application/json'},
          body: JSON.stringify({
            user_id: 8, content, nutrition: nutrition? true : false
          })
        })
        .then( resp => resp.json())
        .then(post => {
          this.addPost(post)
        })
      this.setState({
        content: ''
      })
    }

  onChange=(e)=>{
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render(){
    console.log(this.state.nutritionPosts)
    return (
      <div className="App">
        <NavBar />
          <Switch>
            <Route path="/form" render={() =>  <Form filter={this.filter}   
                                                      onChange={this.onChange}
                                                      content={this.state.content}/>}/>
            <Route path="/nutrition" render={() =>  <NutritionFeed posts={this.state.nutritionPosts}/>}/>
            <Route path="/physicalactivity" render={() =>  <ActiveFeed posts={this.state.activityPosts}/>}/>
            <Route path="/user" render={() => <UserProfile />}/>
            <Route exact path="/" render={() => <Login />} />
          </Switch>
      </div>
    )
  }
}

export default App;
