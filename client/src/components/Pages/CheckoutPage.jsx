import React, { Component } from 'react';
import './Checkout.css';

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: '',
    }
  }

  render() {
    return (
      <div className="checkout-container">
        <div className="product-table"></div>
        <div className="checkout-forms"></div>
      </div>
    );
  }
}

export default CheckoutPage;