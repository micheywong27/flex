import React from 'react';
import Post from './Post';

class NutritionFeed extends React.Component{

   render(){
     //all posts
     //nutritionPosts = posts.filter(post => post.nutrition == true)
        return (
          <div className="post-container">
            <h1>Trending in Nutrition</h1>
            {
              this.props.posts.map((post, indx) =>{
                return <Post 
                          key={indx}
                          post={post}
                          onSubmit={this.props.onSubmit}
                          allComments={this.props.allComments}
                          comment={this.props.comment}
                          commentInput={this.props.commentInput}
                          deletePost={this.props.deletePost}
                          addToFavs={this.props.addToFavs}
                          myFavs={this.props.myFavs}
                          clapCount={this.props.clapCount}
                        />
              })
            }
          </div>
        )
    } 
}
export default NutritionFeed 