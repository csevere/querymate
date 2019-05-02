import React from 'react';

const HomeCard = (props) => {
    return( 
        <div className="card">
            <div className="card-image">
                <img alt="" src={props.image}/>
                <span className="card-title">{props.cardTitle}</span>
                <a className="btn-floating halfway-fab waves-effect waves-light pink darken-4" href="/">
                    <i className="material-icons">{props.icon}</i>
                 </a>
            </div>
            <div className="card-content">
                <p>{props.cardContent}</p>
            </div>
        </div>  
    );
}

export default HomeCard; 