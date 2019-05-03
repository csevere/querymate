import React, {Component} from 'react';
//import Tabs from 'react-bootstrap/Tabs';
//import Tab from 'react-bootstrap/Tab';

const AuthCard = (props) => {
    return(
        <div className = "grid-auth-container">

            <div className="card grid-item-auth">
                <nav>
                    <div className="card-content card-nav">
                        <div className="nav-wrapper">
                            <ul className="left">
                                <li><a className="waves-effect waves-teal btn-flat" href="/">LOGIN</a></li>
                                <li><a className="waves-effect waves-teal btn-flat" href="/">SIGN UP</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div className="card-content"></div>
                <div className="card-content"></div>
                <div className="card-content"></div>
            
            </div>
         
        </div>
    )
}

export default AuthCard;

