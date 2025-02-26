// let firsname = "Mahadi";
// let lastName = "Hasan";

// let fullName = firsname + " " + lastName;

// console.log(fullName);

// let name = "Linda"
// let greeting = "Hi there!";

// let greetLinda = () => {
//     console.log(greeting + " " + name + '!');
// };
// greetLinda(); 

// let mypoints =3 ;

// let add3points = () => {
//     mypoints += 3 ;
// };
// let remmove1Point = () => {
//     mypoints -= 1 ;
// };
// //add3points();
// add3points();
// remmove1Point();
// add3points();
// add3points();
// remmove1Point();    

// console.log(mypoints);
let errorParagraph = document.getElementById("error");
let purchase = () => {
    //console.log("button clicked");
    errorParagraph.textContent= "Something Went Wrong, Please Try again"; 

};

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el");
let add = () => {
    let result = num1 + num2
    sumEl.textContent = "sum:"+ result
}

let subtract = () => {
    let result = num1 - num2
    sumEl.textContent = "sum:"+ result
}

let divide = () => {
    let result = num1 / num2
    sumEl.textContent = "sum:"+ result
}

let multiply = () => {
    let result = num1 * num2
    sumEl.textContent = "sum:"+ result
}
