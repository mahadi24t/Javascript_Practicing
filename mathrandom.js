let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandomItem(hands));