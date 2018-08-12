import React, { Component } from 'react';
import Logo from '../../Images/MadLogoShadow.png';
import SideNavBar from './SideNav/SideNavBar.jsx';
import NavQuery from './NavQuery.jsx';
import './Navigation.css';

class Navigation extends Component {
 state = {
    queryDrop: false,
    sidebarShow: false,
    input: ''
  }

  toggleNavInputQuery = () => {
    this.setState({
      queryDrop: !this.state.queryDrop,
      input: ''
    });
  }

  toggleSideBarShow = () => {
    this.setState({
      sidebarShow: !this.state.sidebarShow
    });
  }

  handleNavInputQuery = (e) => {
    this.setState({
      input: e.target.value
    });
    console.log(this.state.input);
  }

  render() {
    let { queryDrop, sidebarShow } = this.state;
    let toggle = null;
    let toggleSlide = null;
    toggle = queryDrop ? "show" : "hide";
    toggleSlide = sidebarShow ? "sidebar-show" : "sidebar-hide"

    return (
      <nav className="top-nav">
        <SideNavBar 
          slide={toggleSlide} 
          close={this.toggleSideBarShow}
        />
        <div className="logo">
          <i 
            className="fab fa-gitter fa-rotate-270 fa-lg"
            onClick={this.toggleSideBarShow}
          ></i>
          <img src={Logo} alt=""/>
        </div>
        <ul className="links">
          <li>About</li>
          <li>Shop</li>
          <li>FAQ</li>
          <li>Contact</li>
          <i 
            className="fas fa-search fa-sm" 
            onClick={this.toggleNavInputQuery}
          ></i>
        </ul>
        <NavQuery 
          toggle={toggle}
          handleNavInput={this.handleNavInputQuery}
          input={this.state.input}
          toggleNavInput={this.toggleNavInputQuery}
        />
      </nav>
    );
  }
}

export default Navigation; 
