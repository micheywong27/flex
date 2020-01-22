import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import NutritionFeed from './NutritionFeed';
import ActiveFeed from './ActiveFeed';
import UserProfile from './UserProfile';
import Form from './Form';
import Login from './Login';
import Favorites from './Favorites';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component{
  state={
    posts: [],
    nutritionPosts: [],
    activityPosts: [],
    content: '',
    myFavs: [],
    comment: '',
    allComments: []
  }

  componentDidMount(){
    fetch('http://127.0.0.1:3000/posts')
    .then(resp => resp.json())
    .then(posts => {
      this.setState({
        posts: posts.data.map(post => post.attributes),
       
        nutritionPosts: posts.data.map(post => post.attributes).filter(post => post.nutrition === true),
        activityPosts: posts.data.map(post => post.attributes).filter(post => post.nutrition === false),
        // allComments: posts.data.map(post => post.attributes.comments)
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

  deletePost=(post)=>{
  let updatedPosts= this.state.posts.filter((myPost)=>{
      return myPost.id !== post.id
    })
    this.setState({ 
      posts: updatedPosts,
      nutritionPosts: post.nutrition ? this.state.nutritionPosts.filter(p => p !== post ) : this.state.nutritionPosts , 
      activityPosts: !post.nutrition ? this.state.activityPosts.filter(p => p !== post ) : this.state.activityPosts
    })
  }

  clapCount=(post)=>{
    let claps = post.clap += 1;
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ id: post.id, clap: claps})
    })
    .then(res => res.json())
    .then(newClaps => {
      console.log(newClaps)
      this.setState({
        posts: [newClaps, ...this.state.posts.filter(post => post.id !== newClaps.id)]
      })
    })
  }

  filter=(e, nutrition)=>{
    e.preventDefault()
    let { content } = this.state;
        fetch('http://127.0.0.1:3000/posts', {
          method: 'POST',
          headers:{ 'Content-Type': 'application/json',
                    'Accept': 'application/json'},
          body: JSON.stringify({
            user_id: 1, content, nutrition: nutrition? true : false
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

  addToFavs=(post)=>{
    if(!this.state.myFavs.includes(post)){
        fetch('http://127.0.0.1:3000/favorites', {
          method: 'POST',
          headers:{ 'Content-Type': 'application/json',
                    'Accept': 'application/json'},
          body: JSON.stringify({
            user_id: 1, post_id: post.id
          })
        })
        .then( resp => resp.json())
        .then( post => {
          this.setState({
            myFavs: [...this.state.myFavs, post]
          })
        })
    }
  }

  removeFromFavs=(post)=>{
    let updatedFavs = this.state.myFavs.filter(p =>{
      return p !== post
    })
    this.setState({
      myFavs: updatedFavs
    })
  }

  commentInput=(e)=>{
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  addComment=(comment)=>{
    this.setState({
      allComments: [...this.state.allComments, comment]
    })
  }

  onSubmit=(e)=>{
    e.preventDefault()
    fetch('http://127.0.0.1:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
       }, 
      body: JSON.stringify({
        textcomment: this.state.comment, user_id: 1, post_id: 1
      })   
    })
    .then(resp => resp.json())
    .then(comment => this.addComment(comment))
    this.setState({
      comment: ''
    })
  }

  render(){
    return (
      <div className="App">
        <NavBar posts={this.state.posts}/>
          <Switch>
            <Route path="/form" render={() =>  <Form filter={this.filter}   
                                                      onChange={this.onChange}
                                                      content={this.state.content}/>}/>
            <Route path="/nutrition" render={() =>  <NutritionFeed posts={this.state.nutritionPosts}
                                                                    deletePost={this.deletePost}
                                                                    addToFavs={this.addToFavs}
                                                                    removeFromFavs={this.removeFromFavs}
                                                                    myFavs={this.state.myFavs}
                                                                    commentInput={this.commentInput}
                                                                    onSubmit={this.onSubmit}
                                                                    comment={this.state.comment}
                                                                    allComments={this.state.allComments}
                                                                    clapCount={this.clapCount}
                                                                    /> 
                                                                    }/>
            <Route path="/physicalactivity" render={() =>  <ActiveFeed posts={this.state.activityPosts}
                                                                      deletePost={this.deletePost}
                                                                      addToFavs={this.addToFavs}
                                                                      removeFromFavs={this.removeFromFavs}
                                                                      myFavs={this.state.myFavs}
                                                                      commentInput={this.commentInput}
                                                                      onSubmit={this.onSubmit}
                                                                      comment={this.state.comment}
                                                                      allComments={this.state.allComments}
                                                                      clapCount={this.clapCount}/> 
                                                                      }/>
            <Route path="/favorites" render={() => <Favorites posts={this.state.activityPosts}
                                                                      deletePost={this.deletePost}
                                                                      addToFavs={this.addToFavs}
                                                                      removeFromFavs={this.removeFromFavs}
                                                                      myFavs={this.state.myFavs}
                                                                      clapCount={this.clapCount}
                                                                      onSubmit={this.onSubmit}
                                                                      comment={this.state.comment}
                                                                      allComments={this.state.allComments}
                                                                      commentInput={this.commentInput}
                                                                      /> 
                                                                    }/>
            <Route path="/user" render={() => <UserProfile />}/>
            <Route exact path="/" render={() => <Login />} />
          </Switch>
      </div>
    )
  }
}
export default App;
