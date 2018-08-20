import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomeLayout from './components/Layout/HomeLayout.jsx';
import HomePage from './components/Pages/HomePage';
import ProductPage from './components/Pages/ProductPage.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import CheckoutPage from './components/Pages/CheckoutPage.jsx';
import SingleProductPage from './components/Pages/SingleProductPage.jsx';
import MainContainer from './hoc/Main.jsx';
const gender = ["women", "men"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      brand: 'adidas',
      page: 0,
      category: ''
    }
  }
  
  handleBrandChange = (brand) => {
    this.setState({
      brand: brand.toLowerCase()
    });
  } 

  trackPageNum = (num) => {
    this.setState({ page: num });
  } 

  setCategory = (gender) => {
    this.setState({
      category: gender
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {gender.map((sex, idx) => {
            return (
              <Route key={idx} path={`/${sex}`} render={() => (
                <MainContainer>
                  <Navigation />
                  <ProductPage 
                    gender={sex} 
                    brand={this.state.brand} 
                    handleBrandChange={this.handleBrandChange}
                    trackPageNum={this.trackPageNum}
                    setCategory={this.setCategory}
                  />
                </MainContainer> )}
              />
            )
          })}
          <Route path="/:id" render={(props) => (
            <MainContainer>
              <Navigation />
              <SingleProductPage 
                {...props} 
                brand={this.state.brand} 
                gender={this.state.category}
                page={this.state.page}
              />
            </MainContainer> )}
          />
          <Route exact path="/" render={() => (
            <MainContainer>
              <Navigation />
              <HomeLayout>
                <HomePage />
              </HomeLayout>
            </MainContainer> )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
