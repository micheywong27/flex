import React from'react';
import Post from './Post';
import PostShowPage from './PostShowPage';

class ActiveFeed extends React.Component{
  state = {
    showPostCard: null
  }

  showPage=(post)=>{
    this.setState({
      showPostCard: post
    })
  }

   render(){
        return (
          this.state.showPostCard ?
            <PostShowPage post={this.state.showPostCard}
            showPage={this.showPage}/>
          :
            ( <div className="post-container">
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
                                showPage={this.showPage}
                              />
                    })
                  }
                </div>))
    } 
}
export default ActiveFeed; 