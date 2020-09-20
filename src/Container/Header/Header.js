import React from 'react'
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import img from '../../shruti.jpg'
import {useStateValue} from '../../StateProvider';
function Header() {
    const [{user},dispatch] = useStateValue();
    return (
        <div className="Header">
            <div className="Header__left">
            <img src="https://www.seekpng.com/png/detail/280-2802791_moran-facebook-link-facebook-logo-black.png" 
            alt="Moran Facebook Link - Facebook Logo Black@seekpng.com"/>
            <div className="facebook__search">
                <SearchIcon/>
                <input placeholder="search facebook"/>
            </div>
            </div>
            <div className="Header__middle">
               <div className="Header__option Header__option--active">
                <HomeIcon />
                </div>
                <div className="Header__option ">
                <FlagIcon/>
                </div>
                <div className="Header__option">
                <SupervisedUserCircleIcon/>
                </div>
                <div className="Header__option">
                <StorefrontIcon/>
                </div>
                <div className="Header__option">
                <SubscriptionsIcon/>
                </div>
            </div>
            <div className="Header__right">
                <div className="Header__info">
                    <Avatar src={user?user.photoURL:img}/>
                    <h4>{user?user.displayName:"facebook"}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>

        </div>
    )
}

export default Header;
