import React, {useState} from 'react';

const Events = () => {
    const clickMe = () => {
        alert('I was clicked');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`The Enter Key was pressed, your input is: ${event.target.value}`);
        }
    }

    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleToggleClick = () => {
        setIsToggleOn(prevState => !prevState);
    }

    return (
        <div>
            <button onClick={clickMe}>Click Me</button>

            
            <input type="text" onKeyDown={handleKeyDown} placeholder="Press the ENTER key! " />

            <button onClick ={handleToggleClick}>
                {isToggleOn ? 'ON' : 'OFF'} Exercise 9 </button>
        </div>
    );
};

export default Events;