import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login here</NavLink></li>
    </>
    return (
        <div>



            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink exact to='/' activeClassName="text-primary">Home</NavLink></li>
                            <li><NavLink to='/' activeClassName="text-primary">Painting</NavLink></li>
                            <li><NavLink to='/pages' activeClassName="text-primary">Drawing</NavLink></li>
                            <li><NavLink to='/error' activeClassName="text-primary">Craft Stuff</NavLink></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><i>Sketchpad</i></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink exact to='/' activeClassName="text-primary">Home</NavLink></li>
                        <li><NavLink to='/' activeClassName="text-primary">Painting</NavLink></li>
                        <li><NavLink to='/pages' activeClassName="text-primary">Drawing</NavLink></li>
                        <li><NavLink to='/error' activeClassName="text-primary">Craft Stuff</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end buttontwo">
                    <Link to='/login'><button className="btn bg-red-400 text-white">Login</button>&nbsp;&nbsp;&nbsp;</Link>
                    <button className="btn bg-yellow-400 text-white">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;