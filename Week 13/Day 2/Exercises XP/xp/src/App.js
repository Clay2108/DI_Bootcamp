
import React from 'react';
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};




// Exercise 1.1 & 1.2

function App() {
//   // Exercise 1.1 & 1.2
//   const myelement = <h1>I love JSX!</h1>;

//   // Exercise 1.3
//   const sum = 5 + 5;

//   // Exercise 2
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
//   };

//   return (
//     <div>
//       {/* Exercise 1.1 & 1.2 */}
//       {myelement}

//       {/* Exercise 1.3 */}
//       <h1>React is {sum} times better with JSX</h1>

//       {/* Exercise 2 */}
//       <h3>First Name: {user.firstName}</h3>
//       <h3>Last Name: {user.lastName}</h3>
//       <UserFavoriteAnimals favAnimals={user.favAnimals} />
//     </div>
//   );
// }

//Exercise 2 (Other method)
 return (

  <div>
    <h3>{user.firstName}</h3>
     <h3>{user.lastName}</h3>

  </div>

)
}









export default App;






