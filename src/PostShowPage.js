import React from 'react';

class PostShowPage extends React.Component{
  state ={
    commentButton: true
  }

  commentButtonToggle=()=>{
    this.setState({
      commentButton: !this.state.commentButton
    })
  }
    render(){
        return(
            <div className="post">
                <h1>{this.props.post.content}</h1>
                <h2>Comments: {this.props.post.comment}</h2>
                    <div>
                        <span role="img" aria-label="clap" onClick={()=>this.props.clapCount(this.props.post)}> 👏 </span>
                        <span role="img" aria-label="favorite" onClick={()=>this.props.addToFavs(this.props.post)}> ❤️ </span>
                        <span role="img" aria-label="delete" onClick={()=>this.props.deletePost(this.props.post)}> ❌ </span>
                        {this.state.commentButton ? 
                            <button onClick={this.commentButtonToggle}>Comment</button>
                          :
                            (<div> 
                              <form onSubmit={(e) => { this.props.onSubmit(e); return this.buttonToggle} }>
                                <input type="text" 
                                      name="comment"
                                      placeholder="Add comment" 
                                      value={this.props.comment} 
                                      onChange={e => this.props.commentInput(e)}/>
                                <input type="submit" value="Submit" />
                              </form>
                            </div>)
                        } 
                    </div>
                <button onClick={() => this.props.showPage(null)}>Go back to feed</button>
            </div>
        )
    }
}
export default PostShowPage;