import React from 'react';
import '../Card.css';

function FreshPostInfo(props) {
    return (
        <div className="FreshPost">
            <div className="thumbnail">
                <img src={props.img} alt="thumbnail img"/>
            </div>
            <div className="content">
                <h1><a href={props.url}>{props.title}</a></h1>
            </div>
        </div>
    );
}

export default FreshPostInfo;