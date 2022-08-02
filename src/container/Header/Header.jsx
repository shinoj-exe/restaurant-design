import React from 'react';
import {images} from '../../constants'
import {SubHeading} from '../../components';
import './Header.css';

const Header = () => (
  <div className="app-header app__wrapper section__padding" id="home">
    <div className="app-wrapper-info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app-header-h1">
        The key To Fine Dinning
      </h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button'>Explore Mneu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
