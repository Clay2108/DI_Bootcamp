import React, { useEffect, useState } from 'react';

function SunriseFunctional () {
    const [country, setCountry] = useState("France");
    const [city, setCity] = useState("Paris");
    const [sunrisehour, setSunriseHour] = useState("");
    const [lat, setLat] = useState(32.0853);
    const [lng, setLng] = useState(34.7818);

const changeCity = (event) =>{
    console.log(event.target.name);
    if (event.target.name == "newyork") {
        setCity("New York");
        setCountry("USA");
        setLat(40.730610);
        setLng(-73.935242);
    }
    else if (event.target.name == "paris") {
        setCity("Paris");
        setCountry("France");
        setLat(32.0853);
        setLng(34.7818);
    }
    
}

useEffect(() =>{
   fetch(`https://api.sunrise-sunset.org/json?lat=`+ lat +` &lng=` + lng)
   .then(resp => resp.json())
    .then(resp => {
      setSunriseHour(resp.results.sunrise);   
    })
}); 

    return (
        <div style={{
            border: '1px solid',
            margin: '20px',
        }}>
            <h1>In country {country} functional</h1>
            <span>The sunrise in {city} is {sunrisehour}</span>
            <button onClick ={changeCity}name="newyork"> New York </button>
            <button onClick ={changeCity}name="paris"> Paris </button>
        </div>
    );
}

export default SunriseFunctional;