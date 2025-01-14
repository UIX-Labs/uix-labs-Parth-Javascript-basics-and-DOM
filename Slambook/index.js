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

  formValues = {
    contactName: contactName.value,
    relationship: relationship.value,
    likeInMe: likeInMe.value,
    hateInMe: hateInMe.value,
    deadReaction: deadReaction.value,
    firstImpression: firstImpression.value,
    beautifulMessage: beautifulMessage.value,
    nickname: nickname.value,
    songForMe: songForMe.value,
    shareOpinion: shareOpinion.value,
  };

  console.log('Form Values:', formValues);

  allSlamArray.push(formValues);

   console.log('All Slams Array:', allSlamArray);

  displaySlamCards();

  form.reset();
  
// Write your code above this line
}
function displaySlamCards() {
  const allSlamsDiv = document.querySelector('.allSlams');
  allSlamsDiv.innerHTML = "";
  allSlamArray.forEach(slam => {
    const cardHTML = `
      <div class="card">
        <p>My name in your contact is <span class="answer">${slam.contactName}</span></p>
        <p>Relationship between us is <span class="answer">${slam.relationship}</span></p>
        <p>Something you like in me is <span class="answer">${slam.likeInMe}</span></p>
        <p>Something you hate in me is <span class="answer">${slam.hateInMe}</span></p>
        <p>If I die what would be your reaction?</p>
        <p><span class="answer">${slam.deadReaction}</span></p>
        <p>What did you feel when you first saw me?</p>
        <p><span class="answer">${slam.firstImpression}</span></p>
        <p>A beautiful message for me?</p>
        <p><span class="answer">${slam.beautifulMessage}</span></p>
        <p>A nickname for me is <span class="answer">${slam.nickname}</span></p>
        <p>A song you want to dedicate to me is <span class="answer">${slam.songForMe}</span></p>
        <p>Can I share your opinion in my status?</p>
        <p><span class="answer">${slam.shareOpinion}</span></p>
      </div>
    `;
   allSlamsDiv.innerHTML += cardHTML;
  });
}


showSlamList();
