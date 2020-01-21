import React from'react'

class Post extends React.Component{

  state ={
    button: true
  }

  buttonToggle=()=>{
    this.setState({
      button: !this.state.button
    })
  }

   render(){
    //  let buttonText = this.props.myFavs.includes(this.props.post) ? "Favorited!" : "Favorite ❤️"
        return (
          <div className="post">
            <h1>{this.props.post.content}</h1>
            <p>Comments: {this.props.allComments}</p>
              <div>
                <span role="img" aria-label="clap" onClick={()=>this.props.clapCount(this.props.post)}> 👏 </span>
                <span role="img" aria-label="favorite" onClick={()=>this.props.addToFavs(this.props.post)}> ❤️ </span>
                <span role="img" aria-label="delete" onClick={()=>this.props.deletePost(this.props.post)}> ❌ </span>
                {this.state.button ? 
                  <button onClick={this.buttonToggle}>Comment</button>
                  :
                  (<div> 
                  <input type="text" 
                          name="comment"
                          placeholder="Add comment" 
                          value={this.props.comment} 
                          onChange={e => this.props.commentInput(e)}/>
                  <button onClick={this.buttonToggle} onSubmit={() =>this.props.onSubmit(this.props.comment)}>Submit</button>
                  </div>)
                } 
              </div>
          </div>
        )
    } 
}
export default Post 