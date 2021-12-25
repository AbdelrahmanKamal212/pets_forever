import React, { Component } from 'react';
import { NavLink,Navigate } from 'react-router-dom';
import "./createAccount.css"
import NavBar from './navbar';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    let navigate = useNavigate();

    return ( 
        <React.Fragment>
          <NavBar/>
            {/*this is the form of sign in */}
            <main className="register-form-signin">
            <form onSubmit={()=>navigate('/navBar_logged')}>
                    <div className="register-upper-div">
                        <i className="fas fa-paw fa-2x"></i>
                        <h2 className="reg-h2">Create New Account</h2>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Username"/>
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Re-type Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> By creating an account you agree to our <a href="#">Terms & Privacy.</a>
                        </label>
                    </div>
                    <button className="w-100 register-btn btn-lg btn-primary" type="submit">Sign Up</button>
                    <div className="register-icon-div">
                        <i className="fab fa-facebook fa-2x"id="reg"></i>
                        <i className="fab fa-google fa-2x"id="reg"></i>    
                        <i className="fab fa-twitter fa-2x "id="reg" ></i>
                        <i className="fab fa-youtube fa-2x" id="reg"></i>
                    </div>
                </form>
            </main>
            
        </React.Fragment>

     );
}
 
export default Register;