import React, { Component } from 'react';
import './App.css';
import LightSplatter from './Images/WmnsSplatter.png';
import DarkSplatter from './Images/MnsSplatter.png';
import Hero_Yellow from './Images/Yellow-Sweats.png';
import Hero_Green from './Images/Green-Jacket.png';

// import ProductPage from './components/Pages/ProductPage.jsx';
import HomeLayout from './components/Layout/HomeLayout.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <HomeLayout>
          <h1 id="slogan">DRESS LIKE <br/> YOU'RE ALREADY <br/> FAMOUS</h1>
          <div className="women">
            <img src={LightSplatter} alt=""/>
            <img className="home-image-w" src={Hero_Yellow} alt=""/>
            <button className="women-shop-btn">SHOP WOMEN</button>
          </div>
          <div className="men">
            <img src={DarkSplatter} alt=""/>
            <img src={Hero_Green} className="home-image-m" alt=""/>
            <button className="men-shop-btn">SHOP MEN</button>
          </div>
        </HomeLayout>
        {/* <ProductPage /> */}
      </div>
    );
  }
}

export default App;
