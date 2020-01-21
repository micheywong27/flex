import React from 'react';
import Post from './Post';

class Favorites extends React.Component{

   render(){
        return (
          <div className="post-container">
            <h1>My Favorites</h1>
            {
              this.props.myFavs.map((post, indx) =>{
                return <Post 
                          key={indx}
                          post={post}
                          onSubmit={this.props.onSubmit}
                          allComments={this.props.allComments}
                          comment={this.props.comment}
                          commentInput={this.props.commentInput}
                          myFavs={this.props.myFavs}
                          deletePost={this.props.deletePost}
                          addToFavs={this.props.addToFavs}
                          clapCount={this.props.clapCount}
                        />
              })
            }
          </div>
        )
    } 
}
export default Favorites 