import React from 'react';
import LeftMenuList from './leftMenuList/LeftMenuList';
import LeftMenuListData from './LeftMenuListData/LeftMenuListData';
import './InnoLeftMenu.css';

function InnoLeftMenu() {
  return (
    <div className="LeftMenuContainer">
        <div className="container-fluid">
            <div className="InnoLeftMenu">
                <LeftMenuList />
            </div>
            <div className="InnovRightData">
                <LeftMenuListData />
            </div>
        </div>
    </div>
  )
}

export default InnoLeftMenu
