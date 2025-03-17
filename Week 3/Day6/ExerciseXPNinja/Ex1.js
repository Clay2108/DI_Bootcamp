// Exercise 1: Checking The BMI
// Instructions     
// Create two objects, each object should hold a persons details. Here are the details:
//     FullName
//     Mass
//     Height                                                                                       
// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
//     Outside of the objects, create a JS function that compares the BMI of the two people.
//     Display the name of the person who has the largest BMI.
//     Example: "The BMI of the person_A is higher than the person_B."

const person1= {
    FullName: "Clayton",
    Mass: 70,
    Height: 1.80,
    BMI: function(){
        return this.Mass / (this.Height * this.Height);
    }
}

const person2= {
    FullName: "Elo",
    Mass: 70,
    Height: 1.80,
    BMI: function(){
        return this.Mass / (this.Height * this.Height);
    }
};

function compareBMI(person1, person2) {
    if(person1.BMI() > person2.BMI()){
        console.log(`The BMI of ${person1.FullName} is higher than ${person2.FullName}.`);
    } else if(person1.BMI() < person2.BMI()){
        console.log(`The BMI of ${person2.FullName} is higher than ${person1.FullName}.`);
    } else {
        console.log(`The BMI of ${person1.FullName} and ${person2.FullName} are the same.`);
    }
}


compareBMI(person1, person2);
