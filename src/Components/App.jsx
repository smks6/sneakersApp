import Banner from './Banner';
import { useState } from 'react';

import '../styles/App.css';
import ShoppingList from './ShoppingList';
import SneakerItem from './SneakerItem';

function App() {
  const [cart, setCart]=useState([])
  const addToCart=(sneakers)=>{
    setCart(prevCart => {
      const existingItem = prevCart.find(item=> item.id === sneakers.id);

      if(existingItem){
        return prevCart.map(item=>
          item.id===sneakers.id
            ?{...item, quantity: item.quantity +1}
            :item
        );
      }else{
        return [...prevCart, {...sneakers, quantity:1}];
      }
    });
  };
  return (
    <div className='App'>
      <Banner />
      <ShoppingList/>
    </div>
  );
}

export default App;
