import React from'react';
import Post from './Post';

class ActiveFeed extends React.Component{
   render(){
        return (
          <div className="post-container">
            <h1>Trending in Physical Activity</h1>
            {
              this.props.posts.map((post, indx) =>{
                return <Post 
                          key={indx}
                          post={post}
                          onSubmit={this.props.onSubmit}
                          comment={this.props.comment}
                          allComments={this.props.allComments}
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
export default ActiveFeed; 