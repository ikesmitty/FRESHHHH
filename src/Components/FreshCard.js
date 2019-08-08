import React from 'react';
import FreshPostInfo from './FreshPostInfo';
import '../Card.css';

function FreshCard(props) {
    return (
        <div className="FreshCard">
            <FreshPostInfo title={props.postInfo.title} url={props.postInfo.url} img={props.postInfo.media != null ? props.postInfo.media.oembed.thumbnail_url : ""}/>
        </div>
    );
}

export default FreshCard;