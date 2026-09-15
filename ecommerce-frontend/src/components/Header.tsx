import { Link } from 'react-router';
import './header.css';

type HeaderProps = {
  cart: {
    productId: string;
    quantity: number;
    deliveryOptionId: string;
  }[];
}

export function Header({ cart }: HeaderProps) {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src="public/images/logo-white.png" alt="Amazon" />
          <img
            className="mobile-logo"
            src="public/images/mobile-logo-white.png"
            alt=""
          />
        </Link>
      </div>

      <div className="middle-section">
        <label htmlFor="header-search" className="visually-hidden">Search products</label>
        <input id="header-search" className="search-bar" type="text" placeholder="Search" />

        <button className="search-button" aria-label="Search products">
          <img className="search-icon" src="images/icons/search-icon.png" alt="" />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" alt="" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
