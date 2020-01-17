import React from'react'

class Post extends React.Component{
   render(){
        return (
          <div className="post">
            <h1>{this.props.post.content}</h1>
              <div>
                <span role="img" aria-label="clap">👏</span>
                <span role="img" aria-label="favorite">❤️</span>
                <span role="img" aria-label="delete">❌</span>
              </div>
          </div>
        )
    } 
}
export default Post 