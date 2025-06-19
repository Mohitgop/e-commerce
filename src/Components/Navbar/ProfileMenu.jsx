import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiUser, FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import MenuItem from './MenuItem';

const ProfileMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        // onClose();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={`absolute right-2 top-[4.2rem] z-50 px-2 w-40 rounded-xl bg-white shadow-xl ring-1 ring-gray-200 transition-all duration-300 ease-in-out 
      ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
    >
      <ul className="divide-y divide-gray-100 py-2">
        <MenuItem to="/profile/@mido" label="View Profile" icon={<FiUser />} />
        <MenuItem to="#" label="Settings" icon={<FiSettings />} />
        <MenuItem to="#" label="Help" icon={<FiHelpCircle />} />
        <MenuItem to="#" label="Sign Out" icon={<FiLogOut />} />
      </ul>
    </div>
  );
};



export default ProfileMenu;