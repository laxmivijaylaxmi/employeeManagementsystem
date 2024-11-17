import React from "react";
import { NavLink } from "react-router-dom";
import { FaBuilding, FaTachometerAlt, FaUser, FaCalendarAlt, FaDollarSign, FaCog } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-teal-600 h-12 flex items-center justify-center">
        <h2 className="text-2xl text-center font-pacific">Employee MS</h2>
      </div>
      <div className="px-4">
        <NavLink 
          className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}
          to="/admin-dashboard" 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>
        <NavLink 
          className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`} 
          to="/home" 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <FaUser />
          <span> Create Employee</span>
        </NavLink>
        <NavLink 
          className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`} 
          to="/employee-list" 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <FaUser />
          <span>Employee List</span>
        </NavLink>
        
      </div>
    </div>
  );
};

export default AdminSidebar;
