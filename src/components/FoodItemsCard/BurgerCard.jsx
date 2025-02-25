import React from 'react';
import './BurgerCard.css';

const BurgerCard = ({ food }) => {
  return (
    <div className="food-card">
      {/* <img src={food.image} alt={food.name} className="food-image" /> */}
      <img className='food-image' src="https://www.foodandwine.com/thmb/XdFd-DvTtouryLCjeCqwhfmmK-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/molten-chocolate-cake-FT-RECIPE0220-0a33d7d0ab0c45588f7bfe742d33a9bc.jpg"  alt={food.name}/>
      
      <div className="food-info">
        <h3 className="food-name">{food.name}</h3>
        <p className="food-description">{food.description}</p>
        <p className="food-price">${food.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default BurgerCard;
