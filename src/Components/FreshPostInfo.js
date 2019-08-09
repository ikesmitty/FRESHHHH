import React from 'react';
import '../Card.css';

function FreshPostInfo(props) {
    return (
        <div className="FreshPost col-12">
            <a href={props.url}>
                <div className="row">
                    <div className="thumbnail col-3">
                        <img className="col-12" src={props.img} alt=""/>
                    </div>
                    <div className="content col-8">
                        <h2>{props.title}</h2>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default FreshPostInfo;