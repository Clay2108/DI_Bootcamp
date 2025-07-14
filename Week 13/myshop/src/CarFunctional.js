import React, { useState } from 'react';

function CarFunctional(props) {
const [color] = useState('red');
const [speed, setSpeed] = useState(0);
const [model] = useState('Polo');   
const [make] = useState('Volkswagen');



    const accelerate = () => {
        setSpeed(speed + 10);
    }

    const decelerate = () => {  
        if (speed <= 0) 
            return;
        
        setSpeed(speed - 10);
    }
  return (
    <div style={{ border: '10px solid' }}> 
    
        <h1>Hi, I am a {make} {model} of {color} and I am going {speed} Km/h</h1>
        <button onClick= {accelerate}>Accelerate</button>
        <button onClick = {decelerate}>Decelerate</button>
      </div>
    
  );
}

export default CarFunctional;