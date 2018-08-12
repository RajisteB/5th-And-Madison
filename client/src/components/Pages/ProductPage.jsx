import React, { Component } from 'react';
import axios from 'axios';
import ProductLayout from '../Layout/ProductLayout.jsx';
import ProductCard from '../Cards/ProductCard.jsx';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      searchItems: [],
      pageNumber: 0,
      prevDisabled: false,
      nextDisabled: false,
    }
  }


  getItems = (page) => {
    axios.get(`https://api.shop.com/sites/v1/search/term/women%20margiela--+0?br=&i=${page}&t=0&apiKey=l7xx98822f77bdd045e1a07135f73c6613de`)
    .then(res => {
      console.log(res.data);
      this.setState({
        searchItems: res.data.searchItems
      })
    });
  }

  handleNextPage = async() => {
    if ( this.state.pageNumber >= 50) {
      await this.setState({
        pageNumber: 50,
        nextDisabled: true,
        prevDisabled: false
      })
    } else {
      await this.setState((prevState, props) => {
        return {
          pageNumber: prevState.pageNumber + 1,
          nextDisabled: false,
          prevDisabled: false,
        }
      });
      await this.getItems(this.state.pageNumber);
    }
  }

  handlePreviousPage = async() => {
    if ( this.state.pageNumber <= 0) {
      await this.setState({
        pageNumber: 0,
        nextDisabled: false,
        prevDisabled: true
      })
    } else {
      await this.setState((prevState, props) => {
        return {
          pageNumber: prevState.pageNumber - 1,
          nextDisabled: false,
          prevDisabled: false,
        }
      });
      await this.getItems(this.state.pageNumber);
    }
  }

  componentDidMount() {
    this.getItems(this.state.pageNumber);
    this.handlePreviousPage();
  }

  render() {
    let { prevDisabled, nextDisabled } = this.state;
    let buttonDisabledPrevClass = null;
    let buttonDisabledNextClass = null;

    buttonDisabledPrevClass = prevDisabled ? "disabled" : null;
    buttonDisabledNextClass = nextDisabled ? "disabled" : null;

    
    console.log(this.state.pageNumber);

    return (
      <div className="App">
      <button 
        onClick={ prevDisabled ? null : this.handlePreviousPage}
        className={buttonDisabledPrevClass}
      >
        Prev Page
      </button>
      <button 
        onClick={nextDisabled ? null : this.handleNextPage} 
        className={buttonDisabledNextClass}
      >
        Next Page
      </button>
      <ProductLayout>
        <ProductCard items={this.state.searchItems}/>
      </ProductLayout>
      </div>
    );
  }
}

export default ProductPage;
