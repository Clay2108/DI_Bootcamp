import React, { Component } from 'react';

function UserFavoriteAnimals(props) {
return(
  <div>
 <h4>Users favorite animals are</h4>   

  {props.favAnimals.map(animal =><li>{animal}</li>)}
 <hr></hr>
 {props.favAnimals.map(function(animal) {return <li key={animal}>{animal}</li>})}

  </div>
);

}


export default UserFavoriteAnimals;
