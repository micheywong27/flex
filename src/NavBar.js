import React from'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
   render(){
      return (
          <div className="nav-bar">      
              <div>
                <input type="text" 
                        placeholder="Search the feeds..." />
                <button><div>Submit</div></button>
              </div>
              <Link to="/form" className="link"><div>Create a post</div></Link>
              <Link to="/nutrition" className="link"><div>Nutrition Feed</div></Link>
              <Link to="/physicalactivity" className="link"><div>Active Feed</div></Link>
              <Link to="/user" className="link"><div>Hector's Profile</div></Link>
              <Link to="/favorites" className="link"><div>My Favorites</div></Link>
          </div>
        )
    } 
}
export default NavBar;