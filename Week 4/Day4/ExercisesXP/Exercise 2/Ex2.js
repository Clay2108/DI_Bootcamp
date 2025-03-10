//2.1 Add a “light blue” background color and some padding to the <div>.
const div = document.querySelector('div');
div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';

//2.2 Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
const firstLi = document.querySelector('ul li:first-child');
firstLi.style.display = 'none';

//2.3 Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
const secondLi= document.querySelector('ul li:nth-child(2)');
secondLi.style.border = '2px solid black';

//2.4 Change the font size of the whole body.
const body= document.querySelector('body');
body.style.fontSize = '50px'

//Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (div.style.backgroundColor === 'lightblue') {
    alert('Hello x and y');
}