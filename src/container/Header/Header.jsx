import React from 'react';
import {images} from '../../constants'
import {SubHeading} from '../../components'
import './Header.css';

const Header = ({title}) => (
  <div className="app__header app__wrapper section__padding" id="Home">
    <div className="app__wrapper_info">
      <SubHeading title ="Chase the new flavour"/>
      <h1 className='app__header-h1'> The Key to Dining</h1>
      <p className='p__opensans' style ={{margin: '2rem 0'}}>Sit tellus sed senectus vivamus molestie. Condimentum volupat morbi facilisis quam scelerisque sapien. Et, penatibus aliauam amet tellus</p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header im" srcset="" />

    </div>
  </div>
);

export default Header;
