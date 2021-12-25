import React  from 'react';
import { NavLink} from 'react-router-dom';
import "./NavBar_Logged.css"

const NavBar_Logged = () => {
    return ( 
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
           <i className="fas fa-paw fa-2x"></i>
           <NavLink className="navbar-brand " to="/" >Pets Forever</NavLink>
           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
               <ul className="navbar-nav mr-auto"> 
                    <li className="nav-item">
                       <NavLink className="nav-link" to="/">Home</NavLink>
                   </li>     
                   <li className="nav-item">
                       <NavLink className="nav-link" to="/shop" >Shop</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link" to="/contact">My Account</NavLink>
                   </li>

               </ul>
           </div>
       </div>
   </nav>

     );
}
 
export default NavBar_Logged;