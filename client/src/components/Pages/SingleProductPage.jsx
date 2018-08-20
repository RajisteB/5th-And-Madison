import React, { Component } from 'react';
import axios from 'axios';
import './SingleProduct.css';
import { Link, withRouter } from 'react-router-dom';
import Main from '../../hoc/Main.jsx';

class SingleProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToCart: '',
      product: null,
      imgIndex: 0,
      price: 0,
    }
  }

  handleImageChange = (direction) => {
    let length = this.state.product.alternateImages.length - 1;

    if (this.state.imgIndex === length) {
      this.setState({ imgIndex: 0 })
    }

    if (direction === 'right') {
      if (this.state.imgIndex === length) {
        this.setState({ imgIndex: 0 })
      } else {
        this.setState({ imgIndex: this.state.imgIndex + 1 })
      }
    }

    if(direction === 'left') {
      if (this.state.imgIndex === 0) {
        this.setState({ imgIndex: length })
      } else {
        this.setState({ imgIndex: this.state.imgIndex - 1})
      }
    }
  }

  getProduct = (id) => {
    axios.get(`/product/${id}`)
      .then(res => {
        this.setState({
          product: res.data.data,
          price: res.data.data.price
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getProduct(this.props.match.params.id);
  }

  render() {
    let { product, imgIndex } = this.state;
    let parser = new DOMParser();
    let imageWheel = null;
    let imageCount = null;
    let productInfo = null;

    imageWheel = product ? 
      <img src={product.alternateImages[imgIndex].largeURL} alt=""/> :
      <h2>Loading...</h2>;

    imageCount = product ? 
      <h4>{imgIndex + 1}/{product.alternateImages.length}</h4> :
      <h6>Loading...</h6>

    let parsed = product ? 
      <Main>
        <h2>{product.caption}</h2>
        <p>
          {product.description.replace(/<(.|\n)*?>/g, '').split('').map(char => 
          char.charCodeAt(0) <= 127 ? char : '').join('')}
        </p>
        <h2>{product.priceInfo.price}</h2>
      </Main>
      : "";

    productInfo = product ? parsed : <h4>Loading...</h4>;


    console.log(this.props);

    return (
      <div className="single-product-container">
        <div className="product-image">
          <i className="far fa-arrow-alt-circle-left fa-2x"
            onClick={() => this.handleImageChange('left')}
          ></i>
          {imageWheel}
          <i className="far fa-arrow-alt-circle-right fa-2x"
            onClick={() => this.handleImageChange('right')}
          ></i>
          {imageCount}
        </div>
        <div className="product-buy">
          <h4>{this.props.brand.toUpperCase()}</h4>
          {productInfo}
          <button>Add To Cart</button>
          <div className="favorites">
            <i className="far fa-heart fa-lg"></i>
            <p>Add to Wishlist</p>
          </div>
          <Link to={`/${this.props.gender}`}>
            Back to Shopping
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SingleProductPage);