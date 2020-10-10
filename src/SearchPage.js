import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneSharpIcon from '@material-ui/icons/TuneSharp';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneSharpIcon />
                <h2>FILTER</h2>
            </div>
            <hr></hr>

            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJxikqsBceASF2ZrGuGk9rJ2wGPuHuezorKgubdqoA=s144-c-k-c0xffffffff-no-rj-mo"
                channel="Darshan"
                verified
                subs="12"
                noOfVideos={3}
                description="If You Are a TECH GEEK and want to do some cool things with it than you are at right place !!!
                             Here you will get all the video's related to SMARTPHONE, PC & also some CODING !!!!"
            />
            <hr />

            <VideoRow 
               image="https://i.ytimg.com/an_webp/MhkcfQRmSOU/mqdefault_6s.webp?du=3000&sqp=CO2Z-_sF&rs=AOn4CLDZfJzK6oVYjjuCK1s-Qyz-jsDkKw"
               subs = "12"
               description="We wanted to make programming easy and give an intuition of where to use, which control statements. So we designed a game with few levels such that each of those would give a basic understanding of different control statements to the player. "
               timestamp = "2 months ago"
               channel = "Darshan"
               title="Spiderman - code to Home | Pygame Project"
               views = "50 views"
            />

<VideoRow 
               image="https://i.ytimg.com/an_webp/S8VRnPIGE0A/mqdefault_6s.webp?du=3000&sqp=CMCz-_sF&rs=AOn4CLA7Me-4tb4aPgjdJ92exvtbW0cG6g"
               subs = "12"
               description="Loved it ?
               Than please LIKE and SHARE and also SUBSCRIBE !!!
               For Any Doubt Question & Queries Comment Below."
               timestamp = "3 years ago"
               channel = "Darshan"
               title="Make your Very First PC GAME For Begineers !!!"
               views = "85 views"
            />

<VideoRow 
               image="https://i.ytimg.com/vi/efA9KYnm32s/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDegBrsvJOXZT6JCLGWNUKn8wHlQg"
               subs = "12"
               description="Car being drifted and drived all in one short video guys sorry for any mistake it's my first YouTube video

               But I promise as the Channel will grow the quality of video in terms of clarity as well as in terms of story and length of video will also increase thank-you."
               timestamp = "4 years ago"
               channel = "Darshan"
               title="Cars Drifting [Stop Motion Animation]"
               views = "81 views"
            />




        </div>
    )
}

export default SearchPage
