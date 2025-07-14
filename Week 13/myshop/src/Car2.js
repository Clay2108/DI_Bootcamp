import React from 'react';

class Car2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      speed: 100,
      model: "Polo",
      Make: "Volkswagen",
     
    };
  }
accelerate = () => {
    this.setState({
        speed: this.state.speed + 10
    });
};

decelerate = () => {
    if (this.state.speed <= 0) {
        return;
    }
    // this.setState({
    this.setState({
        speed: this.state.speed -10
    });
};

  render() {
    return (
        <div>
    <h1>Hi, I am a {this.state.Make} {this.state.model} of color {this.state.color} and I am going {this.state.speed} Km/h</h1>
    <button onClick={this.accelerate}>Accelerate</button>
    <button onClick={this.decelerate}>Decelerate</button>
         </div>
    );
  }
}
export default Car2;