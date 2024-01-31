let form;
let allSlamArray=[];
//Write code below to select the form element
form = document.querySelector ('.form');
// Write your code above
console.log(form,"form");

// Add the evenlistner below
if(form){
    form.addEventListener('submit', function (event){
        event.preventDefault();
        showSlamList();
    });
}else{
    console.log('Form element not found.');
}
//Write your code above

function showSlamList(){
//Update the function here
console.log('Form Submitted!');
// Write your code above this line
}

showSlamList();