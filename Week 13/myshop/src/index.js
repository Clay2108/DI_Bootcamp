import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './Car';
import FavoriteActors from './FavoriteActors';
import Car2 from './Car2';
import CarFunctional from './CarFunctional';
import Sunrise from './Sunrise';
import SunriseFunctional from './SunriseFunctional';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myvariable = <h1>This is my title</h1>;
const equation = <h1>2 + 6 = { 2 + 6 }</h1>;
const mycontactform = (
  <form>
    <label>Name</label>
    <input type="text" name="name"/>
  </form>
)
const listofitems = (
  <>
    <span>Chocolate</span>
    <span>Milk</span>
  </>
)
const actors = [
  { "name": "Tom Cruise", "age": 60 },
  { "name": "Brad Pitt", "age": 40 },
  { "name": "Will Smith", "age": 50 }
];

root.render(
  <React.StrictMode>
  <Sunrise />
  <SunriseFunctional />
  {myvariable}
  {equation}
  {mycontactform}
  {listofitems}
  <Car model='BMW' color= "yellow" year="2025" />
  <Car model='KIA' color= "Aqua" year="2017" />
  <Car model='Jeep' color= "Beige" year="2024" />
  <FavoriteActors actors ={actors} />
  {/* <App /> */}
  <Car2 />
  <CarFunctional/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
