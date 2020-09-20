import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import EmojiFlagIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import shruti from '../../shruti.jpg';
import {useStateValue} from '../../StateProvider';

function Sidebar() {
  const [{user},dispatch] =useStateValue();

    return (
        <div className="Sidebar">
            <SidebarRow src={user?user.photoURL:shruti} title= {user?user.displayName:"shruti"}/>
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 infocenter"/>
          <SidebarRow Icon={EmojiFlagIcon} title="pages"/>
          <SidebarRow Icon={PeopleIcon} title="Friends"/>
          <SidebarRow Icon={StoreFrontIcon} title="Marketplace"/>
          <SidebarRow Icon={ChatIcon} title="Messenger"/>
          <SidebarRow Icon={VideoLibraryIcon}title="Videos"/>
        </div>
    )
}

export default Sidebar
