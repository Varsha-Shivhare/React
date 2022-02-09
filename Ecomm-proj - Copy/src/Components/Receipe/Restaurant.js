import React, {useState} from 'react';
import './Restaurant.css';
import MenuAPI from './MenuAPI';
import MenuData from './MenuData';

const Restaurant = () => {
    const [menuData, setMenuList] = useState(MenuAPI)

  return (
            <>
                <MenuData menuData = {menuData}/>
            </>
  ) 
};

export default Restaurant;


