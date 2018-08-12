import React from 'react'
import './ProductLayout.css';

const productLayout = ( props ) => {
  return (
    <div className="product-layout-grid">
      {props.children}
    </div>
  )
}

export default productLayout;