import React,{useState,useEffect} from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import PostData from './PostData/PostData';
import FeedC from './FeedC/FeedC';
import db from '../../Firebase';
function Feed() {
    const [posts,setPosts] = useState();
    useEffect(()=>{
       return db.collection('posts').orderBy("timeStamp","desc").onSnapshot(snap=>{
            return setPosts(snap.docs.map(doc=>({id:doc.id,data:doc.data()})))
        });
        
    },[]);
  
    return (
        <div className="Feed">
            <StoryReel/>
            <PostData/>
            
            {posts?posts.map(post=>{
                return <FeedC
                    key={post.id}
                    Message={post.data.message}
                    profilePic={post.data.profilePic}
                    image={post.data.image}
                    userName = {post.data.userName}
                    timeStamp={post.data.timeStamp}
                />
            }):null}
        </div>
    )
}

export default Feed
