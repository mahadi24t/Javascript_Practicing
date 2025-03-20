let player1Time = 102;
let player2Time = 103;

function getFastestRaceTime(){
    if (player1Time < player2Time) {
        return player1Time;
    } else if (player1Time > player2Time) {
        return player2Time;
    } else {
        return player1Time;
    }

}
function totalRaceTime(){
    return player1Time + player2Time;
}
let fastTime = getFastestRaceTime();

console.log(fastTime);
let totalRacetime = totalRaceTime() 

console.log(totalRacetime);