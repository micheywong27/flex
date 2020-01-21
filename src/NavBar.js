import React from'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component{
   render(){
        return (
          <div className="nav-bar">      
              <div>
                <input  placeholder="Search the feeds..."/>
                <button><div>Submit</div></button>
              </div>
              <Link to="/form"><div>Create a post</div></Link>
              <Link to="/nutrition"><div>Nutrition Feed</div></Link>
              <Link to="/physicalactivity"><div>Active Feed</div></Link>
              <Link to="/user"><div>User Profile</div></Link>
              <Link to="/favorites"><div>My Favorites</div></Link>
          </div>
        )
    } 
}
export default NavBar 