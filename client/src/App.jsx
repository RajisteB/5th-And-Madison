import React, { Component } from 'react';
import './App.css';
import HomePage from './components/Pages/HomePage';
import ProductPage from './components/Pages/ProductPage.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      brand: 'adidas'
    }
  }
  
  handleBrandChange = (brand) => {
    this.setState({
      brand: brand.toLowerCase()
    });
    console.log('[App.jsx] In handleBrandChange');
    console.log(this.state.brand);
  } 

  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <HomeLayout>
          <HomePage />
        </HomeLayout> */}
        <ProductPage 
          gender={"women"} 
          brand={this.state.brand} 
          handleBrandChange={this.handleBrandChange}
        />
      </div>
    );
  }
}

export default App;
