function Cart({ cartItems, onRemoveItem, onClearCart }) {
    const totalItems = cartItems.reduce((sum, item) => 
        sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => 
        sum + (item.prix * item.quantity), 0);

    return (
        <div className="cart">
            <h2>🛒 Panier</h2>

            {cartItems.length === 0 ? (
                <p>Votre panier est vide, continuez vos achats.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <strong>{item.nom}</strong> ({item.quantity}) - {item.prix * item.quantity} €
                                <button onClick={() => onRemoveItem(item.id)} className="remove-item-btn">
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
