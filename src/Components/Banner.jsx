import logo from '../assets/logo.png';
import '../styles/Banner.css';
import './Cart.jsx';

function Banner() {
  return (
    <header className='banner'>
        <img src={logo} className='banner-logo' alt='Logo Sneakers'/>
        <div className='banner-content'>
            <button>🛒 Panier</button>
            <button>Accueil</button>
            <h1>SNEAKERS SET</h1>
            <p>Le style qui vous accompagne partout</p>
        </div>
    </header>
  );
}

export default Banner;