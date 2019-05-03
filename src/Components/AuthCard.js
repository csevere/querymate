import React, {Component} from 'react';
//import Tabs from 'react-bootstrap/Tabs';
//import Tab from 'react-bootstrap/Tab';

const AuthCard = (props) => {
    return(
        <div className = "grid-auth-container">

            <div className="card grid-item-auth z-depth-3">
            
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

                <div className="card-content panel1">

                    <row className="card-smedia-wrapper">
                        <button className="btn-large waves-effect waves-light pink darken-4 card-smedia-btn">
                            <div><img className="card-smedia-img" src="images/google.png" alt=""/></div>
                            <div className="card-smedia-text">Continue</div>
                        </button>
                        <button className="btn-large waves-effect waves-light pink darken-4 card-smedia-btn">
                            <div><img className ="card-smedia-img" src="images/twitter.png" alt=""/></div>
                            <div className="card-smedia-text">Continue</div>
                        </button>
                    </row>

                    <row className="card-option center">
                        <div className="center">Or login with email</div>
                        <hr/>
                    </row>

                    <row className="card-email-wrapper">
                        <div className="input-field">
                            <input id="email" type="email" className="validate" />
                            <label for="email"><i class="material-icons right">email</i>Email</label>
                        </div>
                        <div className="input-field">
                            <input id="password" type="password" className="validate" />
                            <label for="password"><i class="material-icons right">lock</i>Password</label>
                        </div>
                    </row>

                    <div className="card-submit-wrapper">
                        <button className="btn-large waves-effect waves-light pink darken-4 card-submit-btn" type="submit" name="action">
                            <div className="card-submit-text">Log in <i class="material-icons right">send</i></div>
                        </button>
                    </div>


                </div>

                <div className="card-content panel2"></div>
            
            </div>
         
        </div>
    )
}

export default AuthCard;

