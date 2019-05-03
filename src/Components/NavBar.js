import React from 'react';

const NavBar = (props) => {
    return(
        <div className = "navbar-fixed">
            <div className = "nav-wrapper pink darken-4 white-text z-depth-2">
                <div className = "brand-logo center">
                    <a className="nav-text" href="/">{props.name}</a> 
                </div>
            </div>
        </div>
    )
}

export default NavBar; 