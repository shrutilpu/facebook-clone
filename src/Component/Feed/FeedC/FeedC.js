import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment'
import ShareIcon from '@material-ui/icons/Share'
import React from 'react';
import './FeedC.css';
function FeedC({profilePic,image,userName,timeStamp,Message}) {
    return (
        <div className="Post">
            <div className="Post__Top">
                <Avatar src={profilePic} className="Post__Avatar"/>
                <div className="Post__topInfo">
                    <h3>{userName}</h3>
                    <span>{new Date(timeStamp?timeStamp.toDate():"time").toUTCString()}</span>
                </div>
            </div>
            <div className="Post__Bottom">
               <p>{Message}</p>
               <div className="Post__image">
                   <img src={image} alt="posts"/>
               </div>
            </div>
            <div className="Post__Options">
                <div className="Post__option">
                  <ThumbUpIcon/>
                  <p>Like</p>
                </div>
                <div className="Post__option">
                  <CommentIcon/>
                  <p>Comment</p>
                </div>
                <div className="Post__option">
                  <ShareIcon/>
                  <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default FeedC
