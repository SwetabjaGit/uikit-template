import React from 'react';


const Navbar = () => {
  return (  
    <div className="newsblog-nav uk-container">
      <nav className="nav-scroll">
        <ul className="uk-subnav uk-flex uk-flex-between uk-flex-nowrap">
          <li className="uk-active"><a href="#">World</a></li>
          <li><a href="#">Politics</a></li>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Trends</a></li>
          <li><a href="#">Social Media</a></li>
          <li><a href="#">People</a></li>
          <li><a href="#">Science</a></li>
          <li><a href="#">Opinion</a></li>
          <li><a href="#">Culture</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </nav>
    </div>
  );
}
 
export default Navbar;