const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const attendingField = document.querySelectorAll('.isAttending');
const numOfGuestsField = document.getElementById('numOfGuests');
const submitBtn = document.getElementById('submitBtn');
let rsvp;
const getRadios = function(arr) {
  for (ele of arr) {
    if (ele.checked === true) return ele.value;
  }
};
function RSVP(name, email, isAttending, numOfGuests) {
  this.name = name;
  this.email = email;
  this.isAttending = isAttending;
  this.numOfGuests = numOfGuests;
}
console.log(attendingField);

const clickEvent = function(event) {
  rsvp = new RSVP(
    nameField.value.toUpperCase(),
    emailField.value.toLowerCase(),
    getRadios(attendingField),
    numOfGuestsField.value
  );
  console.log(rsvp);
};

submitBtn.addEventListener('click', clickEvent);
