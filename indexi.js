//.                parameters
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments
let hi = "Howdy"
greetUser(hi, "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)

function getFirst(arr){
    return arr[0]
}


let firstCard = getFirst(["2,3,4"])

console.log(firstCard)


