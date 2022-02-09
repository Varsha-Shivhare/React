import React from 'react';

 function MenuData({menuData}) {

    //console.log(menuData)
     
  return (
      <div className="contentWrapper">
        {
            menuData.map((currEle) => 
                <div className='background' key={currEle.id} >
                    <div className='menuItem'>
                        <h4 className="number">{currEle.id}</h4>
                        <h3 className="name">{currEle.name}</h3>
                        <h3 className="price">Price - {currEle.price}</h3>
                    </div>
                </div>
            )
        }
           
    </div>
  )
}

export default MenuData;

//s<img src={currEle.image} alt="images" className='image' />
