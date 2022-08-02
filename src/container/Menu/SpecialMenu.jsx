import React from 'react';
import {images,data} from '../../constants';
import {SubHeading,MenuItem} from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app-specialmenu flex__center section__padding" id='menu'>
    <div className="app-specialmenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app-specialmenu-menu">
      <div className="app-specialmenu-menu-wine flex__center">
        <p className='app-specialmenu-menu-heading' >Wine and Beer</p>
        <div className="app-specialmenu-menuitems">
          {data.wines.map((wine,index)=>(
            <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className="app-specialmenu-menu-img">
        <img src={images.menu} alt="Menu Img" />
      </div>
      <div className="app-specialmenu-menu-cocktails flex__center">
        <p className='app-specialmenu-menu-heading' >Cocktails</p>
        <div className="app-specialmenu-menuitems">
          {data.cocktails.map((cocktail,index)=>(
            <MenuItem key={cocktail.title+index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop:'15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
