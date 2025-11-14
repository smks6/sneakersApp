import { Link } from 'react-router-dom';
import Cart from './Cart';
import '../styles/PanierPage.css';

function PanierPage({ cartItems, onRemoveFromCart, onClearCart, onDecreaseQuantity, onIncreaseQuantity }) {
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="panier-page">
      <h1>🛍️ Mon Panier</h1>

      <Cart
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onClearCart={onClearCart}
        onDecreaseQuantity={onDecreaseQuantity}
        onIncreaseQuantity={onIncreaseQuantity}
      />

      <div className="panier-buttons">
        {isCartEmpty ? (
          <button className="valider-btn disabled" disabled>
            Passer commande
          </button>
        ) : (
          <Link to="/validerPanier" className="valider-btn">
            Passer commande
          </Link>
        )}
      </div>

      <div className="panier-buttons">
        <Link to="/" className="catalogue-btn">
          🏷️ Retour au catalogue
        </Link>
      </div>
    </div>
  );
}

export default PanierPage;
