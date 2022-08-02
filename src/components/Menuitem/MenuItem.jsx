import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className="app-menuitem">
    <div className="app-menuitem-head">
      <div className="app-menuitem-name">
        <p className="p__cormorant" style={{color:'#DCCA87'}}>{title}</p>
      </div>
      <div className="app-menuitem-dash"></div>
      <div className="app-menuitem-price">
        <p className="p__cormorant" >{price}</p>
      </div>
    </div>
    <div className="app-menuitem-sub">
      <p className="p__opensans" style={{color:'#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
