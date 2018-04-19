import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Images
import HeaderImg from './img/header.jpg';
import LogoSVG from './img/logo.svg';
import LogoPNG from './img/logo.png';
import LogoFullPNG from './img/logo-full.jpg';
import Box from './img/box.jpg';
import Ciabatta from './img/ciabatta.jpg';
import RoastedChicken from './img/roasted-chicken.jpg';
import CarrotSalad from './img/carrot-salad.jpg';
import Utensils from './img/utensils.svg';
import Calendar from './img/calendar.svg';
import Briefcase from './img/briefcase.svg';
import Sauces from './img/sauces.jpg';
import Envelope from './img/envelope.svg';
import Phone from './img/phone.svg';
import Facebook from './img/facebook.svg';
import Twitter from './img/twitter.svg';
import Instagram from './img/instagram.svg';





// Data
import FOOD from './data/Food';
import SERVICE from './data/Service';


ReactDOM.render(<App initialFood={FOOD} initialServices={SERVICE} />, document.getElementById('app'));

