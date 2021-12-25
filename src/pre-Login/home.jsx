import React from 'react';
import"./home.css";
import { useNavigate } from "react-router-dom";
import NavBar from './navbar';

const Home = () => {
    {/*this is where i called my useHistory object*/}
    let navigate = useNavigate();
    return (
    <React.Fragment>
      <NavBar/>
       <div className="head-div">
                <h1>Hi there!</h1>
                <h1>Do you want buy me a toy?</h1>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quia?</p>
                <p>Excepturi atque possimus quas qui temporibus ratione</p>  
                <button 
                    type="button" 
                    className="btn btn-warning" 
                    onClick={()=>navigate("/login")}
                >Shop Now</button>
            </div> 
    </React.Fragment> 
    
    );
}
 
export default Home;