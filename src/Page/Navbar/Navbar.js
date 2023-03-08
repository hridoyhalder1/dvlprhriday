import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
// import logo from '../../assests/HH.png';

const Navbar = () => {
    return (
        <div >
            <BrowserRouter>
                <div className="navbar bg-slate-800 text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='#projects' smooth>Project</Link></li>
                                <li><Link to='#about' smooth>About Me</Link></li>
                                <li><Link to='#contact' smooth>Contact</Link></li>
                                <li><Link to='#blog' smooth>Blog</Link></li>
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Dvlpr Hriday</Link>
                    </div>
                    <div className='navbar-end md:navbar-end lg:navbar-center'>
                        <FaPhone className='mr-1'/>
                        <a href="tel:+8801863901163">+8801863901163</a>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='#projects' smooth>Project</Link></li>
                            <li><Link to='#about' smooth>About Me</Link></li>
                            <li><Link to='#contact' smooth>Contact</Link></li>
                            <li><Link to='#blog' smooth>Blog</Link></li>
                        </ul>
                    </div>
                </div>

            </BrowserRouter>
        </div>
    );
};

export default Navbar;