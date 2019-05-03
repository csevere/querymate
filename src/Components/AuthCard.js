import React, {Component} from 'react';
//import Tabs from 'react-bootstrap/Tabs';
//import Tab from 'react-bootstrap/Tab';

const AuthCard = (props) => {
    return(
        <div className = "grid-auth-container">

            <div className="card grid-item-auth">
                <div className="card-content card-nav">
                    <nav className="pink darken-4">
                        <div className="nav-wrapper">
                            <ul className="left card-nav-text">
                                <li><a className="waves-effect btn-flat" href="/">LOGIN</a></li>
                                <li><a className="waves-effect btn-flat" href="/">SIGN UP</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>


                <div className="card-content"></div>
                <div className="card-content"></div>
                <div className="card-content"></div>
            
            </div>
         
        </div>
    )
}

export default AuthCard;

