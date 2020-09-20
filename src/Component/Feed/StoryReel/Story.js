import React from 'react';
import  './Story.css';
import { Avatar } from '@material-ui/core';
function Story({image,src,title}) {
    return (
        <div className="Story" style={{backgroundImage:`url(${image})`}}>
            <Avatar src={src} className="Story__Avtar"/>
            <h5>{title}</h5>
        </div>
    )
}

export default Story;
