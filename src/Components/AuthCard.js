import React, {Component} from 'react';
//import Tabs from 'react-bootstrap/Tabs';
//import Tab from 'react-bootstrap/Tab';

const AuthCard = (props) => {
    return(
        <div className = "grid-container">
            
            <a className="grid-item-auth btn-large waves-effect waves-light pink darken-4 white-text z-depth-4" href="/home">
                Continue                
                <i className="material-icons right">send</i>
            </a>
        </div>
    )
}

export default AuthCard;

