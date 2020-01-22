import React from 'react';
import Post from './Post';
import PostShowPage from './PostShowPage';

class NutritionFeed extends React.Component{
  state = {
    showPostPage: null
  }

  showPage=(post)=>{
    this.setState({
      showPostPage: post
    })
  }

   render(){
      return (
        this.state.showPostPage ?
          <PostShowPage post={this.state.showPostPage}
                        showPage={this.showPage}/>
        :
          (<div className="post-container">
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
                              removeFromFavs={this.props.removeFromFavs}
                              addToFavs={this.props.addToFavs}
                              myFavs={this.props.myFavs}
                              clapCount={this.props.clapCount}
                              showPage={this.showPage}
                            />
                  })
                }
          </div>)
        )
    } 
}
export default NutritionFeed;