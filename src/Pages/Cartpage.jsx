import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CartPage() {
  const location = useLocation();
  const { cart } = location.state || { cart: [] }; // Retrieve the cart passed from MainPage
  const navigate = useNavigate();

  // Optional: You can add a button to navigate back to the main page
  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <img src={item.image} alt={item.title} style={{ width: '500px', height: '600px', marginRight: '10px' }} />
              <div>
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
                <button onClick={goBack}>Go Back to Shop</button>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
}
