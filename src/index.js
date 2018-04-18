import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Images
import HeaderImg from './img/header.jpg';
import Logo from './img/therotisserieco-logo.jpg';
import Rooster from './img/rooster.jpg';
import Chicken from './img/chicken.svg';
import Box from './img/box.jpg';
import Ciabatta from './img/ciabatta.jpg';
import RoastedChicken from './img/roasted-chicken.jpg';
import CarrotSalad from './img/carrot-salad.jpg';
import Utensils from './img/utensils.svg';
import Calendar from './img/calendar.svg';
import Briefcase from './img/briefcase.svg';
import Sauces from './img/sauces.jpg';


// Data
import FOOD from './data/Food';
import SERVICE from './data/Service';


ReactDOM.render(<App initialFood={FOOD} initialServices={SERVICE} />, document.getElementById('app'));

