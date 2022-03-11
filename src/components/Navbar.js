import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () =>{
    // console.log("apple")
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <div>
      <ul className='nav-ul'>
        <li className='nav-li'><Link to="/">Products</Link></li>
        <li><Link to="/addProduct">Add Product</Link></li>
        <li><Link to="/updateProduct">Update Product</Link></li>
       
        <li><Link to="/profile">Profile</Link></li>
        <li>{ auth ? <Link onClick={logout} to="/signup">Logout</Link> : <Link to="/signup">Sign Up</Link> }</li>
      </ul>

    </div>

  )
}
