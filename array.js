// Arrays - ordered lists of items

// 0 indexed
let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

//featuredPosts

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba
//
console.log(experience[1])
console.log(experience[2])
console.log(experience[0])

let cards = [7,4];
console.log(cards);
cards.push(1);
console.log(cards);

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage);

console.log(messages);

for ( let count = 10;  count < 21;  count += 1 )  {
    
    console.log(count)

}
for(let i=10 ; i<=100;i+=10){
    
    console.log(i)
}
//loop
let message = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]

for (let i = 0; i < messages.length; i++) 
{
    console.log(message[i]);
}


let Cards = [7,3,9]

for( let i=0 ; i< Cards.length; i++ ){
    console.log(Cards[i])
}
