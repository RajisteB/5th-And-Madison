import React from 'react';
import { Link, withRouter } from 'react-router-dom'; 
import LightSplatter from '../../Images/WmnsSplatter.png';
import DarkSplatter from '../../Images/MnsSplatter.png';
import Hero_Yellow from '../../Images/Yellow-Sweats.png';
import Hero_Green from '../../Images/Green-Jacket.png';
import HomeLayout from '../../components/Layout/HomeLayout.jsx';

const HomePage = () => {
  return (
    <HomeLayout>
      <h1 id="slogan">DRESS LIKE <br/> YOU'RE ALREADY <br/> FAMOUS</h1>
      <div className="women">
        <img src={LightSplatter} alt=""/>
        <img className="home-image-w" src={Hero_Yellow} alt=""/>
        <Link to="/women">
          <button className="women-shop-btn">SHOP WOMEN</button>
        </Link>
      </div>
      <div className="men">
        <img src={DarkSplatter} alt=""/>
        <img src={Hero_Green} className="home-image-m" alt=""/>
        <Link to="/men">
          <button className="men-shop-btn">SHOP MEN</button>
        </Link>
      </div>
    </HomeLayout>
  );
}

export default withRouter(HomePage);