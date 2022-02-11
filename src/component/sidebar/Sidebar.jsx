import React from 'react';
import Dashboard from '@material-ui/icons/Dashboard';
import Notification from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/HelpOutline';
import Person from '@material-ui/icons/Person';
import Group from '@material-ui/icons/Group';
import Paid from '@material-ui/icons/AccountBalance';
import Pic from './pic.jpeg';
import './Sidebar.css';

function Sidebar() {
  return(
      <>
      <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <img src={Pic} alt="pic" className="sidebarprofileIcon" />
            <span className="sidebarListItemTextt">Company Affiliate <i className="arrow down"></i><br/><span className="sidebarListItemTex">Affiliate</span></span>
          </li>
          <li className="sidebarListItem">
            <Dashboard className="sidebarIcon" />
            <span className="sidebarListItemText">Dashboard</span>
          </li>
          <li className="sidebarListItem">
            <Dashboard className="sidebarIcon" />
            <span className="sidebarListItemText">CPA<i className='plus'>&#43;</i></span>
          </li>
          <li className="sidebarListItem">
            <Dashboard className="sidebarIcon" />
            <span className="sidebarListItemText">PPC<i className='plus'>&#43;</i></span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Referral Program<i className='plus1'>&#43;</i></span>
          </li>
          <li className="sidebarListItem">
            <Paid className="sidebarIcon" />
            <span className="sidebarListItemText">Earning</span>
          </li>
          <li className="sidebarListItem">
            <Dashboard className="sidebarIcon" />
            <span className="sidebarListItemText">Reports<i className='plus2'>&#43;</i></span>
          </li>
          <li className="sidebarListItem">
            <Notification className="sidebarIcon" />
            <span className="sidebarListItemText">Notification</span>
          </li>
          <li className="sidebarListItem">
            <AccountCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Account<i className='plus3'>&#43;</i></span>
          </li>
          <li className="sidebarListItem">
            <HelpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Help<i className='plus'>&#43;</i></span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <span className="sidebarListItemText">Affiliate Manager</span>
          </li>
        </ul>
        <button className="sidebarButton"><Person/></button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {/* {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))} */}
        </ul>
      </div>
    </div>
      </>
  );
}

export default Sidebar;
