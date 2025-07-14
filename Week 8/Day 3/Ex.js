// filter for all users older than 30 and store their data in an array use Array.filte Array.map Objects.keys

const users= {
    user1: { age:44, name: "picard"},
    user2: { age: 12, name: "sisko"},
    user3: { age: 109, name: "janeway"},
}

const usersArray = Object.keys (users);
console.log(usersArray);

const olderThan30 = usersArray.filter((key) => users[key].age > 30);
console.log(olderThan30);

const arrmap= olderThan30.map(item =>({id:item, ...users[item]}))
console.log(arrmap);
