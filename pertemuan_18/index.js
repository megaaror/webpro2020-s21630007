console.log("JavaScript Class & OOP")

//Class & Constructor

// const Person = {
//     firstName: "Stenly",
//     lastName: "Adam",
//     displayFullName: function () {
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }

// Person.displayFullName()

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    displayFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const person1 = new Person("Stenly", "Adam")
console.log(person1)
person1.displayFullName()
const person2 = new Person("John", "Doe")
person2.displayFullName()

//Inheritance
class Student extends Person{
    constructor(firstName,lastName,NIM){
        super(firstName, lastName)
        this.NIM =NIM
    }

    displayNIM(){
        console.log(`Your NIM is ${this.NIM}`)
    }
    
    //Setter
    set studentScore(score){
        this.score = score
    }

    //Getter
    get studentScore(){
        return this.score
    }
    
    //Static member
    static sayHello(){
        console.log(`Hello World`)
    }
}

const john = new Student("John", "Doe", "112233")
john.displayFullName()
john.displayNIM()
Student.sayHello()

john.studentScore = 90;
console.log(john.studentScore)
