import React from 'react';

class Sunrise extends React.Component {
   constructor(props) {
        super(props);
        this.state ={
            country: "France",
            city: "Paris",
            sunrisehour: ""
        };
    }
    componentDidMount() {
        fetch(`https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.78`)
           .then(resp => resp.json())
        .then(resp => {

            this.setState({ sunrisehour: resp.results.sunrise });
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        return (
            <div>
                <h1>In country {this.state.country}</h1>
                <span>The sunrise in {this.state.city} is {this.state.sunrisehour}</span>
            </div>
        );
    }
    }
    
    export default Sunrise;