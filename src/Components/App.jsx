import Banner from './Banner';
import { useState, useEffect } from 'react';
import Cart from './Cart';
import '../styles/App.css';
import ShoppingList from './ShoppingList';


function App() {
  const [cart, setCart]=useState(()=>{
    const savedCart=localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart): [];
  })
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  })
  const addToCart=(sneaker)=>{
    setCart(prevCart => {
      const existingItem = prevCart.find(item=> item.id === sneaker.id);

      if(existingItem){
        return prevCart.map(item=>
          item.id===sneaker.id
            ?{...item, quantity: item.quantity +1}
            :item
        );
      }else{
        return [...prevCart, {...sneaker, quantity:1}];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };


  return (
    <div className='App'>
      <Banner />
      <ShoppingList onAddToCart={addToCart}/>
      <Cart cartItems={cart} 
            onRemoveFromCart={removeFromCart} 
            onClearCart={clearCart}
      />
    </div>
  );
}

export default App;
