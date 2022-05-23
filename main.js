// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//const modalMsg = document.querySelector('div>h2');
const hidden = document.getElementsByClassName('hidden')
const modal = document.getElementById('modal');
const hearts = Array.from(document.getElementsByClassName('like-glyph'));

hearts.forEach((elem) => {
  elem.addEventListener('click', () => {
    return console.log(mimicServerCall()
    .then(response => response)
    .catch()
.then((response) => {
  elem.classList.add('activated-heart')
  elem = FULL_HEART 
  return response;

})
.catch(setTimeout((modal) => hidden.remove(), 3000)))



//.then(response => response.json)
//.catch(setTimeout((modal) => hidden.remove(), 3000)))
    




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
