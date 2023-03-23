import React from 'react';
import Header from './Header/Header.js';
import InnoBanner from './InnoBanner/InnoBanner.jsx';
import InnoLeftMenu from './InnoLeftMenu/InnoLeftMenu.jsx';
import './Header/Header.css';



const App = () => {
  return (
    <div>
      <Header />
      <InnoBanner />
      <InnoLeftMenu />
    </div>
  )
}

export default App


