import React, { Component } from 'react';
import "./contact.css"
import NavBar from './navbar';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <React.Fragment>
            <NavBar />
            <div    className = "full-body">
                <h1 className="contact-h1">
                    Get in touch
                </h1>
                <p className="h1-p">
                    We'd love to hear from you.
                </p>
                <div className="row">
                    <div className="col-1"> </div>
                    <div className="col-5"> 
                        <i className="fas fa-phone-alt fa-4x" id ="env"></i>
                        <h3>Talk to Sales</h3>
                        <p className="h3-p">Interested in Pet's Forever marketing software? Just pick up the </p>
                        <p className="h3-p">phone to chat with a member of our sales team</p>
                        <a href="tel:+201550751887">Call Us</a>
                    </div>
                    <div className="col-5"> 
                        <i className="fas fa-envelope fa-4x "id ="env"></i>
                        <h3>Contact Customer Support</h3>
                        <p className="h3-p">Sometimes you need help from your friends. Or a  </p>
                        <p className="h3-p">Pet's Forever support team, Don't worry... we're here for you</p>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdokamal212@gmail.com">Contact Us</a>. 

                    </div>     
                    <div className="col-1"> </div>
               
                </div>

            </div>





        </React.Fragment>
    );
}
 
export default Contact;
