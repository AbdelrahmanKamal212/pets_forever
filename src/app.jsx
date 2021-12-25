import React from 'react';
import Home from './pre-Login/home';
import {BrowserRouter , Route, Routes} from "react-router-dom"
import Login from './pre-Login/login';
import Register from './pre-Login/createAccount';
import Contact from './pre-Login/contact';
import NavBar_Logged from './after-Login/NavBar_Logged'

import"./app.css";



class App extends React.Component {
    render() { 
        return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<Register />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/navBar_logged" element={<NavBar_Logged />}/>
                   {/* <Route path="/about" element={<About />} />*/}



                </Routes>
             </BrowserRouter>
            
        </React.Fragment>
        
        );
    }
}
 
export default App;