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

let age = 20;
if (age <=  21)
{
    console.log("you are young and not allowed to go to nightclub");
}
else{
    console.log("you are old and allowed to go to nightclub");

}

// Check if the person is elegible for a birthday card from the King! (100)

//let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if ( age < 100) {
    console.log("Not elegible");
}
else if (age === 100) {
    console.log("Here is your birthday card from the King!");

}
else{
    console.log("Not elegible, you have already gotten one");
}

let sentence = ["Hello ", "my ", "name ", "is ", "Mahadi!"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i]
}