import React from'react';
import Post from './Post';

class ActiveFeed extends React.Component{
   render(){
        return (
          <div className="activity">
            <h1>Trending in Physical Activity</h1>
            {
              this.props.posts.map((post, indx) =>{
                return <Post 
                          key={indx}
                          post={post}
                        />
              })
            }
          </div>
        )
    } 
}
export default ActiveFeed; 