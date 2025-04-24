import React from 'react';
import Garage from './Garage.js';

function Car (props) {
    return (
     <div>
        <h1>This car is a {props.brand.color} {props.brand.name} {props.brand.model} </h1>
        <Garage size="small" />
     </div>
    );
}
export default Car;