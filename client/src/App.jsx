import React, { Component } from 'react';
import './App.css';
import ProductPage from './components/Pages/ProductPage.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <ProductPage />
      </div>
    );
  }
}

export default App;
