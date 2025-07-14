
import "./Car.css"
function Car(props) {
     

    return (
    <div className="box" style={{backgroundColor: props.color,
        fontSize: "50px"
    }}>
           <h1>I am a {props.model} car of colour {props.color} year {props.year}</h1>
           <hr></hr>
    </div>)
}
    export default Car 
