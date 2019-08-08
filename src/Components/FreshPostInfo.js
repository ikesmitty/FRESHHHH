import React from 'react';

function FreshPostInfo(props) {
    return (
        <div className="FreshPost">
            <img src={props.img} alt="thumbnail img"/>
            <p>{props.title}</p>
            <p>{props.url}</p>
        </div>
    );
}

export default FreshPostInfo;