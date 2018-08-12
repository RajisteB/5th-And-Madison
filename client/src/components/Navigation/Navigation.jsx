import React, { Component } from 'react';
import './Navigation.css';
import Logo from '../../Images/MadLogoShadow.png';

class Navigation extends Component {
 state = {
    queryDrop: false,
    input: ''
  }

  toggleNavInputQuery = () => {
    this.setState({
      queryDrop: !this.state.queryDrop,
      input: ''
    });
  }

  handleNavInputQuery = (e) => {
    this.setState({
      input: e.target.value
    });
    console.log(this.state.input);
  }

  render() {
    let { queryDrop } = this.state;
    let toggle = null;
    toggle = queryDrop ? "show" : "hide"

    return (
      <nav className="top-nav">
        <div className="logo">
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
        <div className={`query ${toggle}`}>
          <input 
            type="text" 
            placeholder="Search..."
            onChange={this.handleNavInputQuery}
            value={this.state.input} 
          />
          <h4
            onClick={this.toggleNavInputQuery}
          >X</h4>
        </div>
      </nav>
    );
  }
}

export default Navigation; 
