import React, { useState } from 'react';
import data from '../../Assets/Data';
import { Link } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="bg-gray-800 fixed left-0 right-0 text-white flex justify-between items-center z-10">
      <Link to='/' className="text-xl font-bold p-4 lg:text-3xl">{data.personal.name}</Link>
      <nav className="flex items-center">
        <ul className={`navbar flex ${showNav ? 'show' : ''}`} onClick={()=>setShowNav(!showNav)}>
          <li><Link to="/about" className="hover:bg-gray-400 hover:text-gray-100 p-4 rounded-md">About</Link></li>
          <li><Link to="/experience" className="hover:bg-gray-400 hover:text-gray-100 p-4 rounded-md">Experiences</Link></li>
          <li><Link to="/projects" className="hover:bg-gray-400 hover:text-gray-100 p-4 rounded-md">Projects</Link></li>
          <li><Link to="/skills" className="hover:bg-gray-400 hover:text-gray-100 p-4 rounded-md">Skills</Link></li>
          <li><Link to="/contact" className="hover:bg-gray-400 hover:text-gray-100 p-4 rounded-md">Contact</Link></li>
        </ul>
        <div 
          onClick={() => setShowNav(!showNav)} 
          className='menu-icon text-2xl ml-4 cursor-pointer p-4' 
          aria-label="Toggle navigation"
        >
          <CgMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
