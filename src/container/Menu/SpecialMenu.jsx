import React from 'react';

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import './SpecialMenu.css'; 

const SpecialMenu = () => (
  <div className='app__specialMenu flex_center section__padding' id='menu'>
    <div className='app__specialMenu_title'>
      <SubHeading title="Menu That Fits You" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu_menu'>

      <div className='app__specialMenu_menu_wine flex_center'>
        <p className='app__specialMenu_menu_heading'> Wine & Beer </p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index) => (
            //<p>{wine.title}</p>
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className='app__specialMenu_menu_img'>
        <img src={images.menu} alt="menu img"/>
      </div>

      <div className='app__specialMenu_menu_clcktails flex_center'>
        <p className='app__specialMenu_menu_heading'> Cocktails </p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (
            //<p>{cocktail.title}</p>
            <MenuItem key={cocktail.title + index} title={cocktail.title}  price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

    </div>
    
    <div style={{ display:"flex",justifyContent:'center', marginTop: 15 }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
