import React  from 'react';
import { NavLink} from 'react-router-dom';

import "./navbar.css"

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
           <i className="fas fa-paw fa-2x"></i>
           <NavLink className="navbar-brand " to="/" >Pets Forever</NavLink>
           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
               <ul className="navbar-nav mr-auto"> 
                  {/* <li className="nav-item" >
                       <NavLink className="nav-link" to="/about">About Us</NavLink>
                   
                   </li>
                    */}
                   <li className="nav-item">
                       <NavLink className="nav-link" to="/contact">Contact Us</NavLink>

                   </li>
                    
                   <li className="nav-item">
                       <NavLink className="nav-link" to="/login">Login</NavLink>

                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link" to="/signUp" >Sign Up</NavLink>
                   </li>
           
               </ul>
           </div>
       </div>
   </nav>







     );
}
 
export default NavBar;