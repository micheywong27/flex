import React from'react';

class UserProfile extends React.Component{
  state ={
    theCommentButton: true
  }

  commentButtonToggle=()=>{
    this.setState({
      theCommentButton: !this.state.theCommentButton
    })
  }

  render(){
    return (
      <div className="post">
          <img className="headerImg"src="https://media.giphy.com/media/KziKCpvrGngHbYjaUF/giphy.gif"alt="yoda" />
          <h1 className="username">Hector Polanco</h1>
          <img className="img" src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/mandalorian-babyyoda-plush-frontpage-700x311.jpg" alt="babyyoda"/>
          <h2>My Posts: </h2>
          <p>I ran to school today in only 5 minutes!</p>
            <div> 
              <span role="img" aria-label="clap" onClick={()=>this.props.clapCount(this.props.post)}> 👏 </span>
              <span role="img" aria-label="favorite" onClick={()=>this.props.addToFavs(this.props.post)}> ❤️ </span>
              <span role="img" aria-label="delete" onClick={()=>this.props.deletePost(this.props.post)}> ❌ </span>
                {this.state.theCommentButton ? 
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
          <p>Chefed up some penne ala vodka #chefin</p>
            <div> 
              <span role="img" aria-label="clap" onClick={()=>this.props.clapCount(this.props.post)}> 👏 </span>
              <span role="img" aria-label="favorite" onClick={()=>this.props.addToFavs(this.props.post)}> ❤️ </span>
              <span role="img" aria-label="delete" onClick={()=>this.props.deletePost(this.props.post)}> ❌ </span>
                {this.state.theCommentButton ? 
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
          </div>
        )
    } 
}
export default UserProfile; 