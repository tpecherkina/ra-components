import React from 'react';
import PropTypes from 'prop-types';
import Item from '../models/Item';

function ShopItemFunc({ item }) {
    const { brand, title, description, descriptionFull, price, currency } = item;
    return (
        <div class="main-content">
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div class="description">{descriptionFull}</div>
        <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">{currency}{price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
}

ShopItemFunc.propTypes = {
    user: PropTypes.instanceOf(Item).isRequired,
  };
  
  export default ShopItemFunc;
  