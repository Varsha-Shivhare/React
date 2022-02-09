import Idli from './images/Idli.jpg';
import dosa from './images/dosa.jpg';
import sandwich from './images/sandwich.png';
import franky from './images/franky.jpg';
import burger from './images/burger.jpg' ;
import pasta from './images/pasta.jpg' ;
import maggie from './images/maggie.png' ;
import momos from './images/momos.jpg' ;
import tea from './images/tea.jpg' ;

const MenuAPI = () => [
    {
      id: 1,
      type: 'Breakfast',
      image: Idli,
      name: "Idli",
      price: "5$"
    },
    {
        id: 2,
        type: 'Breakfast',
        image: dosa,
        name: "Dosa",
        price: "8$"
    },
    {
        id: 3,
        type: 'Breakfast',
        image: sandwich,
        name: "Sandwich",
        price: "10$"
    },
    {
        id: 4,
        type: 'Breakfast',
        image: franky,
        name: "Franky",
        price: "4$"
    },
    {
        id: 5,
        type: 'Breakfast',
        image: burger,
        name: "Burger",
        price: "10$"
    },
    {
        id: 6,
        type: 'Breakfast',
        image: pasta,
        name: "Pasta",
        price: "8$"
    },
    {
        id: 7,
        type: 'Breakfast',
        image: maggie,
        name: "Maggie",
        price: "5$"
    },
    {
        id: 8,
        type: 'Breakfast',
        image: momos,
        name: "Momos",
        price: "4$"
    },
    {
        id: 9,
        type: 'Breakfast',
        image: tea,
        name: "Tea",
        price: "2$"
    }
]

export default MenuAPI;
