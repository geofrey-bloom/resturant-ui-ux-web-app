import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" srcset="" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#Home'>Home</a></li>
        <li className='p__opensans'><a href='#Aboutus'>About</a></li>
        <li className='p__opensans'><a href='#Menu'>Menu</a></li>
        <li className='p__opensans'><a href='#Awards'>Awards</a></li>
        <li className='p__opensans'><a href='#Contact'>Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Login / Register</a>
        
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='fff' fontSize={26} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={26} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans"><a href="#Home">Home</a></li>
              <li className="p__opensans"><a href="AboutUs">About</a></li>
              <li className="p__opensans"><a href="#Menu">Menu</a></li>
              <li className="p__opensans"><a href="#Awards">Awards</a></li>
              <li className="p__opensans"><a href="#Contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )

};

export default Navbar;
