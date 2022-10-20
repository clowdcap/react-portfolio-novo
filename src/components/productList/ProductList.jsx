import React from 'react'
import './productList.scss'
import Product from './../product/Product'

const ProductList = () => {
  return (
    <div className="productList">
      <div className="productList__texts">
        <h1 className="productList__title"></h1>
        <p className="productList__desc"></p>
      </div>
      <div className="productList__list">
        <Product />
      </div>
    </div>
  )
}

export default ProductList