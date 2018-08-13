import React from 'react';
import BrandsForMen from '../../data/MensBrands';
import BrandsForWomen from '../../data/WomensBrands';

const ProductSideBar = (props) => {
  let category = null;
  category = props.gender === "men" ? BrandsForMen : BrandsForWomen;

  return (
    <div className="product-menu">
      <h1>brands</h1>
      <ul className="brand-list">
        {category.map((company, idx) => {
          return <li key={idx} onClick={() => props.brand(company)}>{company}</li>
        })}
      </ul>
    </div>
  );
}

export default ProductSideBar;