import { Link } from "react-router-dom";


<div className="navbar-bottom">
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
          <Link to={"/Profile"} className="navbar-link">
            <CgProfile size={20} /> Mys Accountss
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