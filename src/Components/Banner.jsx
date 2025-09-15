import logo from '../assets/logo.png';
import '../styles/Banner.css';

function Banner() {
  return (
    <header className='banner'>
        <img src={logo} className='banner-logo' alt='Logo Sneakers'/>
        <div className='banner-content'>
            <h1>Sneakers Store</h1>
            <p>Trouvez ici les sneakers de vos rêves</p>
        </div>
    </header>
  );
}

export default Banner;