import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Tooltip } from 'react-tooltip'
import { FaListUl } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => { })
    }
    return (
        <div className="navbar bg-sky-900 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <FaListUl></FaListUl>
                    </label>
                    <ul tabIndex={0} className="text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                        <li><NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="text-white btn btn-ghost normal-case -ms-6 md:ms-6 md:text-4xl" style={{ fontFamily: 'Dancing Script' }}>Food Zone</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-white menu menu-horizontal px-1">
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                    <li><NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-x-6">
                <Tooltip className='text-white -mr-4' anchorSelect=".my-anchor-element" place="top">
                    {
                        user && user.displayName
                    }
                </Tooltip>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar -mr-4">
                    {
                        user && <div className="w-10 rounded-full">
                            <a className="my-anchor-element"><img src={user.photoURL} /></a>
                        </div>
                    }
                </label>
                {
                    user ? <button onClick={handleLogOut} className="btn btn-xs">LogOut</button> :
                        <button className="btn btn-xs"><Link to="/login">Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Header;