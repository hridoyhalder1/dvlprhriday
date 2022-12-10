import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="navbar bg-slate-900 text-white">
                    <div className="flex-1">
                        <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='#projects' smooth>Project</Link></li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default Navbar;