import React from 'react';
import Dashboard from '@material-ui/icons/Dashboard';
import Notification from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/HelpOutline';
import Person from '@material-ui/icons/Person';
import Group from '@material-ui/icons/Group';
import Paid from '@material-ui/icons/AccountBalance';

import './Sidebar.css';

function Sidebar() {
  return(
      <>
      <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Dashboard className="sidebarIcon" />
            <span className="sidebarListItemText">Dashboard</span>
          </li>
          <li className="sidebarListItem">
            <Dashboard className="sidebarIcon" />
            <span className="sidebarListItemText">CPA</span>
          </li>
          <li className="sidebarListItem">
            <Dashboard className="sidebarIcon" />
            <span className="sidebarListItemText">PPC</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Referral Program</span>
          </li>
          <li className="sidebarListItem">
            <Paid className="sidebarIcon" />
            <span className="sidebarListItemText">Earning</span>
          </li>
          <li className="sidebarListItem">
            <Dashboard className="sidebarIcon" />
            <span className="sidebarListItemText">Reports</span>
          </li>
          <li className="sidebarListItem">
            <Notification className="sidebarIcon" />
            <span className="sidebarListItemText">Notification</span>
          </li>
          <li className="sidebarListItem">
            <AccountCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Account</span>
          </li>
          <li className="sidebarListItem">
            <HelpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Help</span>
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
