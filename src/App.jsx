import './App.css'
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa6";
import Navbar from './components/Navbar.jsx';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from './assets/L&BOOKS.png';
import blue_rek from './assets/blue.png';
import gift_rek from './assets/gift.png'
import HomePage from './components/Page_books.jsx';
import { Link } from 'react-router-dom';




function Appp() {

  return (
    <>
    <Navbar/>
    
<div className="navbar-bottom">
        <img src={logo} alt="Love Books Logo" />
        <div className="navbar-search">
          <select className="search-category" aria-label="Select category">
            <option value="all">All</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="comics">Comics</option>
          </select>
          <input
            type="text"
            className="search-input"
            placeholder="Search books by title, author, or keyword..."
            aria-label="Search input"
          />
          <button className="search-button" aria-label="Search">
            <FaSearch />
          </button>
        </div>

        <div className="navbar-links">
          <Link to={'/profile'} className="navbar-link">
            <CgProfile size={20} /> My Account
          </Link>
          <a href="#wishlist" className="navbar-link">
            <FaHeart size={20} /> Wishlist
          </a>
          <div className="cart-icon" aria-label="Shopping cart">
            <FaShoppingCart size={20} />
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>

<div className='banner'>
  <img src={gift_rek}></img>
  <img src={blue_rek}></img>
</div>
<HomePage/>
  </>
  );
}

export default Appp
