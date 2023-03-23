/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import HeaderNavBar from './HeaderNavBar/HeaderNavBar.js';
import HeaerSearch from './HeaderSearch/HeaderSearch.js';
import './HeaderNavBar/HeaderNavBar.css';
import './HeaderSearch/HeaderSearch.css';

const header = () => {
  return (
    <>
        <div className="HeaderBg InnoSeparateLine">
          <div className="container-fluid">
              <div className="TopNavBar">
                  <nav>
                      <ul>
                          <li><a href='#'>Our Partners</a></li>
                          <li><a href='#'>News & Press</a></li>
                          <li><a href='#'>Careers</a></li>
                          <li><a href='#'>Supports</a></li>
                          <li><a href='#'>Contact us</a></li>
                      </ul>
                  </nav>
              </div>
          </div>
        </div>
        <div className="HeaderBg">
            <div className="container-fluid">
                <div className="InnoLogoWrap">
                    <div><img src='./images/Innovacx_Logo2.png' className="img-responsive" /></div>
                    <div className='InnoNavAlign'>
                        <HeaderNavBar />
                        <HeaerSearch />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default header
