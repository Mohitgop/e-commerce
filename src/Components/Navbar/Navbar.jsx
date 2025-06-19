import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import ProfileMenu from "./ProfileMenu";
import { useState } from "react";

function Navbar() {
  const [userOptionVisible, setUserOptionVisible] = useState(false)
  const handleProfileMenuVisibility =()=>{
    console.log(userOptionVisible);
    
    setUserOptionVisible(!userOptionVisible)
  }
  return (
    <nav className="bg-gray-100 mx-2 mt-1 rounded-2xl shadow-md p-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wider text-gray-800 uppercase">
        ThinKart
      </div>

      {/* Center Menu */}
      <ul className="flex gap-8 ">
        <li className="cursor-pointer text-gray-600 hover:text-black font-semibold uppercase duration-300 ease-in-out hover:underline underline-offset-2 t transition">
          Home
        </li>
        <li className="cursor-pointer text-gray-600 hover:text-black  uppercase e duration-300 ease-in-out hover:underline underline-offset-2 transition">
          Shop
        </li>
        <li className="cursor-pointer text-gray-600 hover:text-black uppercase e duration-300 ease-in-out hover:underline underline-offset-2 transition">
          About
        </li>
        <li className="cursor-pointer text-gray-600 hover:text-black uppercase e duration-300 ease-in-out hover:underline underline-offset-2 transition">
          Contact
        </li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-xl text-gray-700">
        <FiSearch className="cursor-pointer hover:text-black" title="Search" />
        <ProfileMenu isOpen={userOptionVisible} />
        <div className="relative">
          <FiShoppingCart className="cursor-pointer hover:text-black" title="Cart" />
          {/* Optional: Cart item count */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            2
          </span>
        </div>
        <FiUser className="cursor-pointer hover:text-black" title="Login" onClick={()=>handleProfileMenuVisibility()} />
        
      </div>
    </nav>
  );
}

export default Navbar;
