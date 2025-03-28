// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

//1.Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
let value= document.getElementById('libform');
value.addEventListener('submit', function(e){
    e.preventDefault();
    let noun = document.getElementById('noun').value;
    let adjective = document.getElementById('adjective').value;
    let person = document.getElementById('person').value;
    let verb = document.getElementById('verb').value;
    let place = document.getElementById('place').value;
    let story = document.getElementById('story');
    story.innerHTML = `${person} is a ${adjective} ${noun}. They are always ${verb} at ${place}.`;
});
//2.Make sure the values are not empty
//3.Write a story that uses each of the values.
//4.Make sure you check the console for errors when playing the game.
//Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

let shuffle = document.getElementById('lib-button');
shuffle.addEventListener('click', function(){
    let story = document.getElementById('story');
    let noun = document.getElementById('noun').value;
    let adjective = document.getElementById('adjective').value;
    let person = document.getElementById('person').value;
    let verb = document.getElementById('verb').value;
    let place = document.getElementById('place').value;
    let stories = [
        `${person} is a ${adjective} ${noun}. They are always ${verb} at ${place}.`,
        `${person} is a ${adjective} ${noun}. They are always ${verb} at ${place}.`,
        `${person} is a ${adjective} ${noun}. They are always ${verb} at ${place}.`
    ];
    let random = Math.floor(Math.random() * stories.length);
    story.innerHTML = stories[random];
}); 