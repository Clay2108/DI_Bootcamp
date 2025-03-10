//3.2 Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const navBar= document.getElementById("navBar")
     navBar.setAttribute("id", "socialNetworkNavigation");

//3.3 We are going to add a new <li> to the <ul>
//3.3.1 First, create a new <li> tag (use the createElement method).
//3.3.2 Create a new text node with “Logout” as its specified text.
//3.3.3 Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
const ul= document.querySelector("ul")
const li= document.createElement("li")
const logout= document.createTextNode("Logout")
li.appendChild(logout)
ul.appendChild(li)
 

//4 Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
const firstli= ul.firstElementChild
console.log(firstli.textContent)
const lastli=ul.lastElementChild
console.log(lastli.textContent)