function Cart({ cartItems, onRemoveFromCart, onClearCart, onDecreaseQuantity, onIncreaseQuantity, validerPanier }) {
    const totalItems = cartItems.reduce((sum, item) =>
        sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) =>
        sum + (item.prix.toFixed(2) * item.quantity), 0);

    return (
        <div className="cart">
            <h2>🛒 Panier</h2>

            {cartItems.length === 0 ? (
                <h3>Votre panier est vide, continuez vos achats.</h3>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <strong>{item.nom}</strong> : {(item.prix * item.quantity).toFixed(2)} €
                                <button onClick={() => onDecreaseQuantity(item.id)} className="decrease-item-btn"> – </button>
                                <span>{item.quantity}</span>
                                <button onClick={() => onIncreaseQuantity(item.id)} className="increase-item-btn"> + </button>
                                <button onClick={() => onRemoveFromCart(item.id)} className="remove-item-btn">
                                    Retirer
                                </button>
                            </li>
                        ))}
                    </ul>

                    <p>Total articles : {totalItems}</p>
                    <p>Prix total : {totalPrice.toFixed(2)} €</p>

                    <button onClick={onClearCart} className="clear-cart-btn">
                        Vider le panier
                    </button>


                </>
            )}
        </div>
    );
}

export default Cart;
