//var, let, const

// let nama ="mega";
// let nama ="aror";

// console.log(nama);

//scope dalam javascript
//1. Function Scope (var)
//2. Block Scope 

//(function tes(){
//   for (var i=0; i < 10; i++) {
//     console.log(i);
//    }
//})();
//console.log(i);
{
    let i;
    for (let i=0; i<10; i++){
        console.log(i);
}
}
//console.log(i);

//Template Literal
{
    let i;
    for(i = 0; i<10;i++){
        console.log(i)
    }
}

const person = {
    firstName: "Mega",
    LastName: "Aror",
}
console.log("My name is "+person.firstName+ +person.mode+".");

console.log(`My name is ${person.firstName} ${person.mode}.`);