import React,{useState}from 'react';
import './PostData.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon  from '@material-ui/icons/Videocam'
import ImagegalleryIcon from '@material-ui/icons/Image'
import EmotionIcon from '@material-ui/icons/EmojiEmotions'
import img from '../../../shruti.jpg';
import {useStateValue} from '../../../StateProvider';
import firebase from 'firebase';
import db from '../../../Firebase';

function PostData() {
    const [{user},dispatch]  = useStateValue();
    const [input,setInput] = useState('');
    const [imageUrl,setImageUrl]=useState('');
    const HandleSubmit = e=>{
        e.preventDefault();
 
        db.collection('posts').add({
            message:input,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            userName:user.displayName,
            image:imageUrl
        })
        
        setImageUrl("");
        setInput("");

    }
    return (
        <div className="PostData">
            <div className="Message__head">
             <Avatar src={user?user.photoURL:img}/>
             <form>
                 <input value={input} className="Message__input" 
                 type="text" placeholder="what's on your mind??" 
                 onChange={e=>setInput(e.target.value)}/>
                 <input value={imageUrl} onChange={e=>setImageUrl(e.target.value)}
                 placeholder="upload picture"/>
                 <button type="submit" onClick={HandleSubmit}>hid-sub</button>
             </form>
            </div>
            <div className="Message__bottom">
              <div className="Message__option">
                  <VideocamIcon style={{color:"red"}}/>
                  <h4>Live Video</h4>
              </div>
              <div className="Message__option">
                  <ImagegalleryIcon style={{color:"green"}}/>
                  <h4>Upload Image</h4>
              </div>
              <div className="Message__option">
                  <EmotionIcon style={{color:"yellow"}}/>
                  <h4>Feeling activity</h4>
              </div>
            </div>
        </div>
    )
}

export default PostData;
