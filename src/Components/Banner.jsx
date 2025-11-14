import logo from '../assets/logo.png';
import '../styles/Banner.css';
import { Link } from 'react-router-dom';

function Banner({ cartCount }) {
  return (
    <header className='banner'>
      <img src={logo} className='banner-logo' alt='Logo Sneakers' />
      <div className='banner-content'>
        <Link to="/panier">
          <button>🛒 Panier {cartCount > 0 && <span className="cart-count"> ({cartCount})</span>}</button>
        </Link>
        <Link to="/">
          <button>Accueil</button>
        </Link>
        <h1>SNEAKERS SET</h1>
        <p>Le style qui vous accompagne partout</p>
      </div>
    </header>
  );
}

export default Banner;