import React from "react";
import Car from './Components/Car.js';
import Events from './Components/Events.js';
import Phone from './Components/Phone.js';
import Color from './Components/Color.js';
const carinfo = {name: "Ford", model: "Mustang" , color : "red"};
function App() {
  return (
    <>
      <div className="App">
        <Car brand={carinfo} />  
      </div>
      <Events /> 
      <Phone />
      <Color />
    </>
  );
}

export default App;
