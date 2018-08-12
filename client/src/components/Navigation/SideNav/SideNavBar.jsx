import React from 'react';
import './SideNavBar.css';
import SideLogo from '../../../Images/MadLogo.png';

const SideNavBar = (props) => {
  return (
    <div className={`overlay ${props.slide}`}>
      <div className="side-container">
        <div className="sidebar-action">
          <i 
            className="far fa-times-circle fa-2x"
            onClick={props.close}  
          ></i>
        </div>
        <img src={SideLogo} alt=""/>
        <div className="side-section">
          <i className="fas fa-caret-right"></i>
          <h3>MEN</h3>
        </div>
        <div className="side-section">
          <i className="fas fa-caret-right"></i>
          <h3>WOMEN</h3>
        </div>
        <div className="side-section">
          <i className="fas fa-caret-right"></i>
          <h3>BRANDS</h3>
        </div>
        <div className="side-section">
          <i className="fas fa-caret-right"></i>
          <h3>NEW SALES</h3>
        </div>
        <div className="side-section">
          <i className="fas fa-caret-right"></i>
          <h3>CONTACT US</h3>
        </div>
        <div className="side-section">
          <i className="fas fa-caret-right"></i>
          <h3>MY ACCOUNT</h3>
        </div>
      </div>
    </div>
  );
}

export default SideNavBar;