import React from 'react'
import './VideoRow.css';

function VideoRow({image, title, channel, views, timestamp, subs, description}) {
    return (
        <div className="videoRow">
            <img src={image} alt={channel} />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_headline">
                    {channel} •{" "} <span className="videorow_sub"><span className="videoRow_subs">{subs}</span></span> {" "} Subscriber {views} views • {timestamp}
                </p>
                <p className="videoRow_desc">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
