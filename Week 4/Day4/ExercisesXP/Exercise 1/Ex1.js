
//2.1
const container = document.getElementById("container")
console.log(container , "container")

//2.2

document.querySelector(".list").children[1].textContent ="Richard"

//2.3
document.getElementsByClassName("list")[1].children[1].remove()

//2.4
document.querySelectorAll(".list").forEach(ul => {
    let firstLi=ul.children[0] ;
    if (firstLi) {
        firstLi.textContent ="Clayton"}
    })

//3.1 & 3.2

const list = document.querySelectorAll('.list')

list.forEach(item => item.classList.add("student_list"))
const firstUl = document.querySelector('ul.list.student_list')
firstUl.classList.add('university', 'attendance')


