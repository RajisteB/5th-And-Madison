import React, { Component } from 'react';
import BrandsForMen from '../../data/MensBrands';
import BrandsForWomen from '../../data/WomensBrands';
import * as Scroll from 'react-scroll';

class ProductSideBar extends Component {
  constructor(props) {
    super(props);
    this.activeRef = [];
    this.state = {
      elem: null,
    }
  }

  resetActive = (id) => {
    let element = this.state.elem;
    element.style.opacity = 0.3;
  }

  handleSidebarClick = async(company, id) => {
    let scroll = Scroll.animateScroll;
    if (this.state.elem) {
      await this.resetActive(id);
    } 
    await this.props.brand(company);
    this.activeRef[id].style.opacity = 1;
    this.setState({
      elem: this.activeRef[id]
    })
    scroll.scrollToTop();
  } 

  render() {
    let category = null;
    category = this.props.gender === "men" ? BrandsForMen : BrandsForWomen;

    return (
      <div className="product-menu">
        <h1>brands</h1>
        <h3>{this.props.gender.toUpperCase()}</h3>
        <ul className="brand-list">
          {category.map((company, idx) => {
            return (
              <li 
                key={idx} 
                onClick={() => this.handleSidebarClick(company, idx)}
                ref={(ref) => this.activeRef[idx] = ref}
              >{company}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default ProductSideBar;