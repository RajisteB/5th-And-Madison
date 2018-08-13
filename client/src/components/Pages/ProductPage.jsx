import React, { Component } from 'react';
import axios from 'axios';
import ProductLayout from '../Layout/ProductLayout.jsx';
import ProductCard from '../Cards/ProductCard.jsx';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItems: [],
      pageNumber: 0,
      pageCount: null,
      prevDisabled: false,
      nextDisabled: false,
    }
  }


  getItems = (page) => {
    axios.get(`https://api.shop.com/sites/v1/search/term/${this.props.gender}%20${this.props.brand}--+0?br=&i=${page}&t=0&apiKey=l7xx98822f77bdd045e1a07135f73c6613de`)
    .then(res => {
      console.log(res.data);
      this.setState({
        searchItems: res.data.searchItems,
        pageCount: res.data.pageCount
      })
    });
  }

  handleNextPage = async() => {
    if ( this.state.pageNumber >= this.state.pageCount - 1) {
        this.setState({
        pageNumber: this.state.pageCount,
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

  componentDidUpdate(prevProps, prevState) {
      if (prevProps.brand !== this.props.brand) {
        console.log('[ProductPage.jsx] In ComponentDidUpdate - true');
        this.getItems(this.state.pageNumber);
        this.handlePreviousPage();
      } else {
        return;
      }
  } 

  render() {
    let { prevDisabled, nextDisabled } = this.state;
    let buttonDisabledPrevClass = null;
    let buttonDisabledNextClass = null;

    buttonDisabledPrevClass = prevDisabled ? "disabled" : null;
    buttonDisabledNextClass = nextDisabled ? "disabled" : null;

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
      <ProductLayout 
        brand={this.props.handleBrandChange}
        gender={this.props.gender}
      >
        <ProductCard items={this.state.searchItems}/>
      </ProductLayout>
      </div>
    );
  }
}

export default ProductPage;
