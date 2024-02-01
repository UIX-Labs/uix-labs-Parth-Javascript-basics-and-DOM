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
console.log('I am inside Submit!');

 const contactName = document.querySelector('input[name="contactName"]').value;
  const relationship = document.querySelector('input[name="relationship"]').value;
  const likeInMe = document.querySelector('input[name="likeInMe"]').value;
  const hateInMe = document.querySelector('input[name="hateInMe"]').value;
  const deadReaction = document.querySelector('input[name="deadReaction"]').value;
  const firstImpression = document.querySelector('input[name="firstImpression"]').value;
  const beautifulMessage = document.querySelector('input[name="beautifulMessage"]').value;
  const nickname = document.querySelector('input[name="nickname"]').value;
  const songForMe = document.querySelector('input[name="songForMe"]').value;
  const shareOpinion = document.querySelector('input[name="shareOpinion"]').value;




    validateInput(contactName);
  validateInput(relationship);
  validateInput(likeInMe);
  validateInput(hateInMe);
  validateInput(deadReaction);
  validateInput(firstImpression);
  validateInput(beautifulMessage);
  validateInput(nickname);
  validateInput(songForMe);
  validateInput(shareOpinion);

    function validateInput(inputElement) {
    const inputValue = inputElement.value.trim();
    if (inputValue === "") {
         inputElement.style.borderBottom = "2px solid red";

          const errorMessageSpan = document.createElement("span");
      errorMessageSpan.textContent = "Error: The text is required";

          inputElement.after(errorMessageSpan);
             return;
    }

      inputElement.style.borderBottom = "";
    const errorMessageSpan = inputElement.nextSibling;
    if (errorMessageSpan && errorMessageSpan.tagName === "SPAN") {
      errorMessageSpan.remove();
    }
  }
    console.log('Contact Name:', contactName.value);
  console.log('Relationship:', relationship.value);
  console.log('Something you like in me is:', likeInMe.value);
  console.log('Something you hate in me is:', hateInMe.value);
  console.log('Reaction if I die:', deadReaction.value);
  console.log('First impression:', firstImpression.value);
  console.log('Beautiful message:', beautifulMessage.value);
  console.log('Nickname:', nickname.value);
  console.log('Song dedication:', songForMe.value);
  console.log('Share opinion in mystatus:', shareOpinion.value);

  form.reset();
  
// Write your code above this line
}


showSlamList();