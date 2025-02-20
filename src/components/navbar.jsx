import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./cart-context";
import { TbMenu } from "react-icons/tb";
import { GrClose } from "react-icons/gr";
import Logo from "../assets/images/logo.png";

const NavBar = () => {
  const { cart } = useCart();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = Object.values(cart).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 750;
      setIsMobile(mobile);

      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav aria-label="Menú principal" className="navbar-wrapper">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={Logo} alt="Logo de Worköholics" />
        </Link>
      </div>

      {isMobile ? (
        <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
          <TbMenu style={{ strokeWidth: 1 }} />
        </div>
      ) : (
        <div className="links-wrapper">
          <ul>
            <li>
              <Link to="/books" data-replace="Books">
                <span>Books</span>
              </Link>
            </li>
            <li>
              <Link to="/clothes" data-replace="Clothes">
                <span>Clothes</span>
              </Link>
            </li>
            <li>
              <Link to="/others" data-replace="Others">
                <span>Others</span>
              </Link>
            </li>
            <div className="cart-link">
              <li>
                <Link to="/cart" data-replace={`Cart (${totalItems})`}>
                  <span>Cart ({totalItems})</span>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      )}

      {isMobile && (
        <div className={`menu-modal ${isMenuOpen ? "open" : ""}`}>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
              <GrClose style={{ strokeWidth: 1 }} />
            </button>
            <ul>
              <li>
                <Link to="/books" onClick={() => setIsMenuOpen(false)}>
                  Books
                </Link>
              </li>
              <li>
                <Link to="/clothes" onClick={() => setIsMenuOpen(false)}>
                  Clothes
                </Link>
              </li>
              <li>
                <Link to="/others" onClick={() => setIsMenuOpen(false)}>
                  Others
                </Link>
              </li>
              <li>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                  Cart ({totalItems})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
