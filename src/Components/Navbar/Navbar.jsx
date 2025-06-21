import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import ProfileMenu from "./ProfileMenu";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const [userOptionVisible, setUserOptionVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => setShowSearch((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchInput.trim() !== "") {
      navigate(`/shop?search=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput("");
    }
  };

  const handleProfileMenuVisibility = () => {
    setUserOptionVisible(!userOptionVisible);
  };

  return (
    <nav className="bg-gray-100 mx-2 mt-1 rounded-2xl shadow-md p-4 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="text-2xl font-extrabold tracking-wider text-gray-800 uppercase">
            ThinKart
          </div>
        </Link>

        {/* Hamburger menu on mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>

        {/* Navigation links (desktop only) */}
        <ul className="hidden md:flex gap-8">
          <Link to="/">
            <li className="cursor-pointer text-gray-600 hover:text-black uppercase duration-300 ease-in-out hover:underline underline-offset-2 transition">
              Home
            </li>
          </Link>
          <Link to="/shop">
            <li className="cursor-pointer text-gray-600 hover:text-black uppercase duration-300 ease-in-out hover:underline underline-offset-2 transition">
              Shop
            </li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer text-gray-600 hover:text-black uppercase duration-300 ease-in-out hover:underline underline-offset-2 transition">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer text-gray-600 hover:text-black uppercase duration-300 ease-in-out hover:underline underline-offset-2 transition">
              Contact
            </li>
          </Link>
        </ul>

        {/* Icons (shared desktop + mobile) */}
        <div className=" hidden md:flex items-center gap-4 text-gray-700 text-xl">
          {showSearch && location.pathname === "/shop" && (
            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleSearch}
              className="border border-gray-300 transition-all duration-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          )}
          <Link to={"/shop"}>
          <FiSearch
            className="cursor-pointer hover:text-black"
            title="Search"
            onClick={toggleSearch}
            />
            </Link>

          <Link to="/cart">
            <div className="relative">
              <FiShoppingCart
                className="cursor-pointer hover:text-black"
                title="Cart"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cart.length}
              </span>
            </div>
          </Link>

          <FiUser
            className="cursor-pointer hover:text-black"
            title="Login"
            onClick={
              user == null
                ? () => {
                    setUserOptionVisible(false);
                    navigate("/login");
                  }
                : handleProfileMenuVisibility
            }
          />
          <ProfileMenu isOpen={userOptionVisible} />
        </div>
      </div>

      {/* Mobile Nav (shown when menuOpen === true) */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <li className="text-gray-700 uppercase font-medium">Home</li>
          </Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>
            <li className="text-gray-700 uppercase font-medium">Shop</li>
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <li className="text-gray-700 uppercase font-medium">About</li>
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <li className="text-gray-700 uppercase font-medium">Contact</li>
          </Link>
                  {/* Icons (shared desktop + mobile) */}
        <div className="flex items-center gap-4 text-gray-700 text-xl">
          {showSearch && location.pathname === "/shop" && (
            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleSearch}
              className="border border-gray-300 transition-all duration-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          )}
          <Link to={"/shop"}>
          <FiSearch
            className="cursor-pointer hover:text-black"
            title="Search"
            onClick={toggleSearch}
            />
            </Link>

          <Link to="/cart">
            <div className="relative">
              <FiShoppingCart
                className="cursor-pointer hover:text-black"
                title="Cart"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cart.length}
              </span>
            </div>
          </Link>

          <FiUser
            className="cursor-pointer hover:text-black"
            title="Login"
            onClick={
              user == null
                ? () => {
                    setUserOptionVisible(false);
                    navigate("/login");
                  }
                : handleProfileMenuVisibility
            }
          />
          <ProfileMenu isOpen={userOptionVisible} />
        </div>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
