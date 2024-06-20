import React from 'react';
import SidebarBox from './sidebarBox';
import dashboard from './dashboard';

export default function Sidebar({ applications }) {
  return (
    <div className='sidebar-container'>
      <SidebarBox
        id='interview-box'
        boxHeader='Next Interview: '
        lowerBox='Wednesday 3 PM EST'
      />
      <SidebarBox
        boxHeader='Total Applications: '
        lowerBox={applications.length}
      />
      <SidebarBox
        boxHeader="Today's Applications: "
        lowerBox={applications.length}
      />
    </div>
  );
}
