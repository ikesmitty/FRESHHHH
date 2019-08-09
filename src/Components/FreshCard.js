import React from 'react';
import FreshPostInfo from './FreshPostInfo';
import defaultImg from '../defaultThumbnail.png';
import '../Card.css';

function FreshCard(props) {
    return (
        <div className="FreshCard row-12 mb-4">
            <FreshPostInfo title={props.postInfo.title} url={props.postInfo.url} img={props.postInfo.media != null ? props.postInfo.media.oembed.thumbnail_url : defaultImg}/>
        </div>
    );
}

export default FreshCard;