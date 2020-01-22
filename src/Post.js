import React from'react';

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
     let buttonText = this.props.myFavs.includes(this.props.post) ? "❤️" : "♡"
     let img = this.props.post.image
        return (   
          <div className="post">
                <img src={img} className="postimage" alt="postimage"/>
                <h1 onClick={() => this.props.showPage(this.props.post)}>{this.props.post.content}</h1>
                  <div>
                    <span role="img" aria-label="clap" onClick={()=>this.props.clapCount(this.props.post)}> {this.props.post.clap} 👏 </span>
                    <span role="img" aria-label="favorite" onClick={()=> this.props.myFavs.includes(this.props.post) ? this.props.removeFromFavs(this.props.post) : this.props.addToFavs(this.props.post)}> {buttonText} </span>
                     <span role="img" aria-label="delete" onClick={()=>this.props.deletePost(this.props.post)}> ❌ </span>
                      {this.state.button ? 
                         <button onClick={this.buttonToggle}>Comment</button>
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
            </div>
        )
    } 
}
export default Post;