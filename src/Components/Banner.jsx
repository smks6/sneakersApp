import logo from '../assets/logo.png';
import '../styles/Banner.css';

function Banner() {
  return (
    <header className='banner'>
        <img src={logo} className='banner-logo' alt='Logo Sneakers'/>
        <div className='banner-content'>
            <h1>SNEAKERS SET</h1>
            <p>Le style qui vous accompagne partout</p>
        </div>
    </header>
  );
}

export default Banner;