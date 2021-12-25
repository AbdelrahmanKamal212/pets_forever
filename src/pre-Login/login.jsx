import React from 'react';
import "./login.css"
import NavBar from './navbar';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    return (
        <React.Fragment>
            {/*this is the NavBar */}
           <NavBar />
            {/*this is the form of sign in */}
            <main className="login-form-signin">
                <form onSubmit={()=>navigate('/navBar_logged')}>
                    <div className="login-upper-div">
                        <i className="fas fa-paw fa-2x"></i>
                        <h2 className="login-h2">Sign In</h2>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="w-100 login-btn btn-lg btn-primary" type="submit" >Sign in</button>
                    <div className="icon-div">
                        <i className="fab fa-facebook fa-2x"></i>
                        <i className="fab fa-google fa-2x"></i>    
                        <i className="fab fa-twitter fa-2x" ></i>
                        <i className="fab fa-youtube fa-2x"></i>
                    </div>
                </form>
            </main>
        </React.Fragment>
      );
}
 
export default Login;