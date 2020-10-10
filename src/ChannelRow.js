import React from 'react'
import {Avatar} from "@material-ui/core"
import './channelRow.css'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineSharp';

function ChannelRow({image, channel, subs, verified, noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo" alt={channel} src={image}/>
            <div className="channelRow_text">
            <h4>{channel} {verified && <VerifiedIcon />}</h4>
            <p>{subs} subscribers • {noOfVideos} videos</p>
            <p>{description}</p>


            </div>
        </div>
        

    )
}

export default ChannelRow
