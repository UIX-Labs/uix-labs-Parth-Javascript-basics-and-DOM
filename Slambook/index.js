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




   console.log('Contact Name:', contactName);
  console.log('Relationship:', relationship);
  console.log('Something you like in me is:', likeInMe);
  console.log('Something you hate in me is:', hateInMe);
  console.log('Reaction if I die:', deadReaction);
  console.log('First impression:', firstImpression);
  console.log('Beautiful message:', beautifulMessage);
  console.log('Nickname:', nickname);
  console.log('Song dedication:', songForMe);
  console.log('Share opinion in mystatus:', shareOpinion);

  form.reset();
// Write your code above this line
}

showSlamList();