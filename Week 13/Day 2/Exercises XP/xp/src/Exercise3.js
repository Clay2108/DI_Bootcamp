import React, {Component} from 'react';
import './Exercise.css'

class Exercise extends Component {
    render() {
const mystyle = {

    fontSize: '20px',
    padding: '10px', 
    marginleft: '20px',
    textAlign: 'center',
    alignItems: 'center', 
};

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

    
        return(
            <div>
                <h1 style= {style_header}> This is a Header </h1>

                <p class= "para"> This is a Paragraph </p>

                <a style= {mystyle} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    This is a link
                </a>
                <form style= {mystyle}>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <br />
                    <label>
                        Age:
                        <input type="number" name="age" />
                    </label>
                    <br />
                    <button type="submit">Submit</button>

                </form>
                <img 
                src="https://raw.githubusercontent.com/iamsaief/react-core-concepts/master/public/logo192.png"
                alt="logo"
                style={{width: '100px', height: '100px'}} />
                <ul style= {mystyle}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        );
    }
}





export default Exercise;