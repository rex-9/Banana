import apple from '../assets/apple.svg';
import search from '../assets/search.svg';
import bag from '../assets/bag.png';
import './Nav.scss';

const Nav = () => (
  <>
    <div className="nav">
      <img height={20} src={apple} alt="apple" />
      <span>Store</span>
      <span>Mac</span>
      <span>iPad</span>
      <span>iPhone</span>
      <span>Watch</span>
      <span>AirPods</span>
      <span>TV & Home</span>
      <span>Only on Apple</span>
      <span>Accessories</span>
      <span>Support</span>
      <img height={20} src={search} alt="search" />
      <img height={20} src={bag} alt="bag" />
    </div>
  </>
);

export default Nav;
