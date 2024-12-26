import React from 'react'
import './Filter_Section.css';
import Card from "../Card/Card";
// import '../Card/Card.css'
import Data from "../../Productdata.json"


const Filter_Section = () => {
  return (
   <div>
     <div className="filter-bar">
        <div className="filtertype">
      <select
       
      >
        <option value="">Product type</option>
        <option value="toys">Toys</option>
        <option value="bottle">Games</option>
        <option value="stationary">Books</option>
      </select>

      <select>
        <option value="">Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>

      <select>
        <option value="">Age</option>
        <option value="0-3">0-3 years</option>
        <option value="4-7">4-7 years</option>
        <option value="8-12">8-12 years</option>
      </select>
      </div>

      <div className="sort-by">
        <label>Sort by:</label>
        <select >
          <option value="new">New</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
    <div className='d-flex justify-content-between gap-5 flex-wrap'>
    {Data.products.map((product, index) => (
    <Card
      key={index} // Unique key for React
      title={product.title}
      subtitle={product.subtitle}
      oldPrice={product.old_price}
      newPrice={product.new_price}
      levelRange={product.level_range}
      imageUrl={product.image_url}
    />
  ))}
    </div>

   </div>
    
  )
}

export default Filter_Section

