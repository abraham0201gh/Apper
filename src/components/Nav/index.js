import React from "react";
import "./style.css";



function Nav(props) {
  return (

    <nav className="navbar">
      <ul>

        <li className="brand">
          <a href="/Apper-Tree/">{props.nav.name}</a>
        </li>
        
        <li>{props.nav.result}</li>
        
        <li className="submitApp">
          Submit An App &nbsp;|&nbsp;<span className="logout"> Logout</span>
          {/* Score: {props.nav.score}&nbsp;
          | Top Score: {props.nav.topScore} */}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
