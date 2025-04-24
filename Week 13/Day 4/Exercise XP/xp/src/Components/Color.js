import React, {useState, useEffect} from 'react';

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('yellow');

    useEffect(() => {
        if (favoriteColor === "yellow") {
            alert("useEffect reached");
        }
    }, [favoriteColor]);
        
    

    const changeColor = () => {
        setFavoriteColor(prevColor => prevColor === "yellow" ? "blue" : "yellow");
    }       
    return (
        <div>
            <h1>My Favorite Color is {favoriteColor}</h1>

            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}
export default Color;