import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {auth} from '../../firebase.config';
import { resetFormData } from '@/redux/reducers/form.reducer';
const DropdownMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
   
    // Sign out from Firebase
    auth.signOut().then(() => {
      // Clear localStorage
      console.log("successfully logged out")
      dispatch(resetFormData());
      localStorage.removeItem('accessToken'); 
      // Replace with your relevant key
      localStorage.clear(); // Replace with any other relevant key
      window.location.reload();
    }).catch((error) => {
      // Handle sign-out errors
      console.error('Error signing out:', error);
    });
  };
  
  return (
    <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Home
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
         Orders
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Coupons
        </a>

        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Saved Addresses
        </a>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Logout
        </button>
        {/* Add more dropdown items as needed */}
      </div>
    </div>
  );
};

export default DropdownMenu;
