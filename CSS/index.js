

// const person = {

//     name: "jkhhkj",
//     getName :function(){
//         console.log(this.name);
//     }
// }
// person.getName();

// -----------------------------------------------------DESTRUCTURING (IN OBJECT)

// const person = {
//     name:"Keshav",
//     age:20
// }
// const {name, age} = person;
// console.log(name);
// console.log(age);

// --------------------------------------------------------------DESTRUCTURING (IN ARRAYS)


// const arr = ["xyz",35,100000];
// const [name, age, salary] = arr;
// console.log(name);
// console.log(age);
// console.log(salary);

// ------------------------------------------------------------------SPREAD OPERATOR FOR OBJECT


// const person = {
//          name:"Keshav",
//          age:20
//      }
// const newPerson = {...person,city:"Ghaziabad"};
// console.log(person.name);
// newPerson.name = "Umang";
// console.log(newPerson.name);

// ----------------------------------------------------------------SPREAD OPERATOR FOR ARRAY

// const arr = ["xyz",35,100000];
// const newarr = [...emp , "Ghaziabad"]

//  -----------------------------------------------------------------DEFAULT PARAMETER


//  function add(a,b="Pawas"){
//     console.log(b+a);
//  }
//  add(69);

// -------------------------------------------------------------------

// Q1 what is callback haell ??
// when there is  a function inside another function and a chain is formed then it is called callback hell.

// ---------------------------------------------------------------------ARROW FUNCTION
//  const add = (a,b) => {
//     return a+b;
//     }
// console.log(add(5,7));

// ---------------------------------------------------------------------MAP


// const myMap = new Map([
//     ["name", "Keshav"], 
//     ["age", 20], 
//     [12, "G"]
// ])
// console.log(myMap.get(12));
// myMap.set("hjjk",234);
// console.log(myMap.get("hjjk"));

//---------------------------------------------------------------------SET

// const mySet = new Set();
// mySet.add(12);
// mySet.add(2);
// mySet.add(122);
// mySet.add(13);
// mySet.add(12);
// console.log(mySet);


//-----------------------------------------------------------------------STREAM
const num=[1,5,2,6,3,8];
const c=num.filter((n)=>(n%2==0));
console.log(c);
// agar filter ke andar multiple  condition hain to hume usko andar curly braces lagake return statement use karna padega




// -----------------------------------------------------------------------PROMISES

const promise = fetch("https://api.github.com/users/TripathiKeshavendra");
promise.then(
    (res)=>{
        return res.json();
    }
).then
promise.then((data) => console.log(data)).catch
(
    (err)=>console.log("Error: ",err)
)






