// let player1Time = 102;
// let player2Time = 103;

// function getFastestRaceTime(){
//     if (player1Time < player2Time) {
//         return player1Time;
//     } else if (player1Time > player2Time) {
//         return player2Time;
//     } else {
//         return player1Time;
//     }

// }//
// function totalRaceTime(){
//     return player1Time + player2Time;
// }
// let fastTime = getFastestRaceTime();

// console.log(fastTime);
// let totalRacetime = totalRaceTime() 

// console.log(totalRacetime);

// let rollDice = () => {
//     return Math.floor(Math.random()*6)+1;
// }

// console.log(rollDice());

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)

// let hasCompleted = true;
// let provideCertificate = true;

// if( hasCompleted===true && provideCertificate===true){
//     generateCertificate(); 
// }

// function generateCertificate()  {
//     console.log("Generating Certificate.....");
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// // Create an if statement that checks that both variables are false.
// // If so, run the showSolution() function

// function showSolution() {
//     if(hasSolvedChallenge === false && hasHintsLeft === false){
//     console.log("Showing the solution....");
//     }
// }
// showSolution();

let likesDocumentaries  = false;
let likesStartups = true;

if(likesDocumentaries === true || likesStartups===true){
    recommendMovie()
}
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

