import { Avatar } from '@material-ui/core'
import React from 'react';
import './VideoCard.css';

function VideoCard( {image, title, channel, views, timestamp, Channelimage}) {
    return (
        <div className='videoCard'>
            <img className="videoCard_thumbnail" src={Channelimage} alt="" />
            <div className='videoCard_info'>
                <Avatar className='videoCard_avatar' alt={channel} src={image}/>
                <div className='videoCard_text'>
                  <h4>{title}</h4>
                  <p>{channel}</p>
                  <p>
                      {views} • {timestamp}
                  </p>

                </div>

            </div>
        </div>
    )
}

export default VideoCard
