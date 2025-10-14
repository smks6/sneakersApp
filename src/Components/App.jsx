import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import PanierPage from './PanierPage'; 
import ShippingForm from './CommandePage';


function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (sneaker) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === sneaker.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === sneaker.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...sneaker, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const decreaseQuantity = (id) => {
  setCart(prevCart => {
    return prevCart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0); // Supprime si quantité = 0
  });
  };
  const increaseQuantity = (id) => {
  setCart(prevCart => {
    return prevCart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
  });
  }


  return (
    <Router>
      <div className="App">
        <Banner cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<ShoppingList onAddToCart={addToCart} />} />
          <Route
            path="/panier"
            element={
              <PanierPage
                cartItems={cart}
                onRemoveFromCart={removeFromCart}
                onClearCart={clearCart}
                onDecreaseQuantity={decreaseQuantity}
                onIncreaseQuantity={increaseQuantity}
              />
            }
          />
          <Route path="/validerPanier" element={<ShippingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
