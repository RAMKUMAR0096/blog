import { Link, Navigate, useLocation } from 'react-router-dom';
import AxiosToastError from '../utils/AxiosToastError';
import toast from 'react-hot-toast';
import SummaryApi from '../common/SummaryApi';
import Axios from '../utils/Axios';
import { useEffect, useState } from 'react';

const Header = () => {

  const handleLogout = async (e) => {
    try {
      e.preventDefault();
      const response = await Axios({
        ...SummaryApi.logout
      })
      if (response.data.success) {
        localStorage.clear()
        toast.success(response.data.message)
        Navigate("/")

      }
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Site Name */}
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition duration-200">
            Blog
          </Link>

          {/* Navigation */}
          <nav className="space-x-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 transition duration-200">
              Home
            </Link>

            <Link to="/login" className="text-gray-600 hover:text-indigo-600 transition duration-200">
              Login
            </Link>


            <button onClick={handleLogout} className="text-gray-600 hover:text-indigo-600 transition duration-200">
              Logout
            </button>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
