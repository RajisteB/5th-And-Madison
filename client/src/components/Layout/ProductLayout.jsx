import React from 'react'
import ProductSideBar from './ProductSidebar.jsx';
import './ProductLayout.css';

const productLayout = ( props ) => {
  return (
    <div className="product-container">
      <ProductSideBar brand={props.brand} gender={props.gender}/>
      <div className="product-layout-grid">
        {props.children}
      </div>
    </div>
  )
}

export default productLayout;