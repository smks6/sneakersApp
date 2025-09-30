import '../styles/ShoppingItem.css';  
import '../styles/SneakerItem.css';
import {useState} from 'react';
import CustomerReview from './CustomerReview';

function SneakerItem({sneakerData, onAddToCart}){
    const {nom, marque, prix, style, esthetique, confort, image, bestSeller=false} = sneakerData;
    const [showReviews, setShowReviews] = useState(false);
    const handleToggleAvis=()=>{
        setShowReviews(!showReviews);
    }
    const handleAddToCart=()=>{
        console.log('🛒 Données transmises: ', sneakerData);
        onAddToCart(sneakerData);
    }
 
    return(
        <div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`}>
            <div className='sneaker-image'>
                <img src={image} alt={nom} className="sneaker-image" />
                {bestSeller && <span className="best-seller-badge">🔥 TOP VENTE</span>}
            </div>
            <h3>{nom}</h3>
            <p className="sneaker-brand">{marque}</p>
            <p className="sneaker-price">{prix} €</p>
            <p className="sneaker-style">{style}</p>
            
            <div className='sneaker-review'>
                <button onClick={handleToggleAvis}>
                    {showReviews ? 'Masquer les avis' : 'Voir les avis'}
                </button>
                {showReviews && (
                    <div className='avis-details'>
                        <CustomerReview reviewType='esthétisme' scaleValue={esthetique}/>
                        <CustomerReview reviewType='confort' scaleValue={confort}/>
                    </div>    
                )}
            </div>

            <div className='sneaker-actions'>
                <button onClick={handleAddToCart} className='add-to-cart-btn'>
                    🛒 Ajouter au panier
                </button>
            </div>
        </div>
    )
}


export default SneakerItem;