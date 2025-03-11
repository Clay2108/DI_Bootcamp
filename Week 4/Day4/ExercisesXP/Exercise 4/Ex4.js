//The point of this challenge is to display a list of two books on your browser.
//1.In the body of the HTML page, create an empty div
// 2 In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

//3. Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
//4.Requirements : All the instructions below need to be coded in the js file:
// 1.Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const allBooks=[];

const book1= {
     title: "The Alchemist",
     author: "Paulo Coelho",
     image: "https://i.pinimg.com/736x/1b/b7/ae/1bb7ae5b64d8499bba917929d5d85d07--book-covers-book-jacket.jpg",
     alreadyRead: true
}
const book2= {
     title: "Rich Dad Poor Dad",
     author: "Robert Kiyosaki",
     image: "https://th.bing.com/th/id/OIP.-kFbJ3sSEfk8NqSaV-JFIwHaLO?rs=1&pid=ImgDetMain",
     alreadyRead: false
}

allBooks.push(book1,book2);


 const table = document.createElement("table");
 document.body.appendChild(table);
 table.innerHTML = "<tr><th>Title</th><th>Author</th><th>Image</th></tr>";
 allBooks.forEach(book => {
     const row = document.createElement("tr");
     const title = document.createElement("td");
     const author = document.createElement("td");
     const image = document.createElement("td");
     title.innerText = book.title;
     author.innerText = book.author;
     image.innerHTML = `<img src="${book.image}" width="100px">`;
     if (book.alreadyRead) {
         title.style.color = "red";
         author.style.color = "red";
     }
     row.appendChild(title);
     row.appendChild(author);
     row.appendChild(image);
     table.appendChild(row);
 });