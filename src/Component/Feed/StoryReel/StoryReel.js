import React from 'react'
import './StoryReel.css';
import Story from  './Story';
import img from '../../../shruti.jpg';
function StoryReel() {
    return (
        <div className="StoryReel">
            <Story image="https://picsum.photos/200"
            src={img}
            title="shruti"/>
            <Story image="https://picsum.photos/200"
            src={img}
            title="abhishek"/>
            <Story image="https://picsum.photos/200"
            src={img}
            title="Harshpreet"/>
            <Story image="https://picsum.photos/200"
            src={img}
            title="shaba"/>
            <Story image="https://picsum.photos/200"
            src={img}
            title="shivangi"/>
        </div>
    )
}

export default StoryReel
