// Print hello World
console.log("Hello World");


// Write your code above

//Declare a variable i and set its value to 5
// Write your code here
let i=5;
console.log(i);
// Write your code above

//Write the if else statement to console "Number is odd" if the value of i is odd and "Number is even" if the value of i is even.
// Write your code here
    let i=5;
    if(i % 2===1){
        console.log("Number is odd");
    }
    else{
        console.log("Number is even");
    }
// Write your code above

//Declare a string variable which is always constant and set is value to 'triangle'.
// Write your code here
const TRIANGLE = 'It has 3 sides'
console.log(TRIANGLE);
// Write your code above

//Write a function 'findSide' which takes an argument 'type' and return the number of sides in that shape
// Write your code here
function findSide(type){
    switch (type.toLowerCase()){
        case 'triangle':
        return 3;
        case 'square':
        return 4;
        case 'circle':
        return 'infinite;'
    }


}
// Write your code above
const side = findSide('Circle');
console.log('Side', side);