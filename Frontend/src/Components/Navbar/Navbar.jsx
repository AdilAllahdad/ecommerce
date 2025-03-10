import React, { useState,useEffect } from "react";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { DarkMode } from "../DarkMode";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../Modules/Login";
import { Signup } from "../Modules/Signup";
// import { Link } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import { useCart } from "../../context/CartContext"; 
import { useAuth } from '../../context/AuthContext';





export const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const toggleSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeForms = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const navigate = useNavigate();


  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


// const handleNavigate = () =>{
//   useNavigate("/Addtocard")
// }


  const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Women", link: "/WomenProducts" },
    { id: 3, name: "Men", link: "/MenProducts" },
    { id: 4, name: "Kids", link: "/KidsProducts" },
    { id: 5, name: "All", link: "/AllProducts" },
  ];

  const DropdownLinks = [
    { id: 1, name: "Trending Products", link: "/#" },
    { id: 2, name: "Best Selling", link: "/#" },
    { id: 3, name: "Top Rated", link: "/#" },
  ];

  const [open, setOpen] = useState(false); 
  // const { cartCount } = useCart()
  // const { cart } = useAuth();
  const { cart, cartCount } = useCart();

  // Calculate total cart quantity
  // const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-3 sm:py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="logo" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>

          {/* Right Section */}
          <div className="flex justify-between items-center gap-4">
            {/* Login Button */}
            <button
              className="font-bold border-gray-500 border-2 rounded-full px-2"
              onClick={toggleLogin}
            >
              Login
            </button>

            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>




            {/* Order Button */}
            <button
                onClick={()=>navigate(`/AddtoCart`)}
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3"
            >
              {/* <a href="/cart">Cart ({cart.length})</a> */}
              <FaShoppingCart className="text-xl text-white" />
              <span>
              <span>{cartCount}</span>
              </span>
            </button>







            {/* Dark Mode Switch */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Modals */}
      {(showLogin || showSignup) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-10"
          onClick={closeForms}
        >
          {showLogin && (
            <div onClick={(e) => e.stopPropagation()}>
              <Login onClose={closeForms} setUser={setUser} onCreateAccount={toggleSignup} />
            </div>
          )}
          {showSignup && (
            <div onClick={(e) => e.stopPropagation()}>
              <Signup onCloseSignup={toggleLogin} onClose={closeForms} onAlreadyAccount={toggleLogin} />
            </div>
          )}
        </div>
      )}

      {/* Lower Navbar */}
      <nav className="w-full bg-white shadow-md">
      <div className="flex items-center px-6 py-4  justify-center">
        {/* Logo */}
        {/* <h1 className="text-xl font-bold"></h1> */}

        {/* Desktop Menu */}
        <ul className="sm:flex hidden items-center gap-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="sm:hidden block text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-white transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="block px-4 py-2 text-black hover:text-primary duration-200"
                onClick={() => setOpen(false)} // Close menu on click
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </div>
  );
};
