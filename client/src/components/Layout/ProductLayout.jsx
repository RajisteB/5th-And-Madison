import React, { Component } from 'react'
import ProductSideBar from './ProductSidebar.jsx';
import './ProductLayout.css';
import * as Scroll from 'react-scroll';

class productLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false,
    }
  }

  handleScroll = () => {
    window.addEventListener('scroll', () => {
      let scrolled = window.scrollY;
      if (scrolled >= 500 ) {
        this.setState({
          scroll: true,
        });
      } else {
        this.setState({ 
          scroll: false
        })
      }
    })
  }

  handleToTopClick = () => {
    let scrollSpy = Scroll.animateScroll;
    scrollSpy.scrollToTop();
  }

  componentDidMount() {
    this.handleScroll();
  }

  render() {
    let topArrow = null;
    topArrow = this.state.scroll ? "show" : "hide";

    return (
      <div className="product-container">
        <ProductSideBar brand={this.props.brand} gender={this.props.gender}/>
        <div className="product-layout-grid">
          {this.props.children}
        </div>
        <div className="to-top-of-window" id={`${topArrow}`} onClick={this.handleToTopClick}>
          <i className="far fa-arrow-alt-circle-up fa-lg"></i>
          <h5>Back to Top</h5>
        </div>
      </div>
    );
  }
}

export default productLayout;