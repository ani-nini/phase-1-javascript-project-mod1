

// identify fetch container values that can't not be reassigned(let and var allow reassignment)
const img = document.querySelector('img'); 
//or document.getElementsByTagName('img')[0]

const fullname = document.querySelector('#fullname');
//or document.getElementById('fullname')

const username = document.querySelector('#username');
//or document.getElementById('username')

const email = document.querySelector('#email');
//or document.getElementById('email')

const btn = document.querySelector('button');
//or document.?
 

// add an click event listener with a callback function that fech a randam user api
btn.addEventListener('click', function() {
  fetch('https://randomuser.me/api')// fech is an async function.
  .then(res => res.json())
  .then(parsedData => parsedData.results[0])
  
  .then(updateProfile) // display function 
  .catch(error => console.log(error))// handle the error
})

function updateProfile(data) {
  email.innerText = 'email: '+  data.email;
  fullname.innerText = 'full name: '+ data.name.first + ' ' + data.name.last;
  img.src = data.picture.medium;
  username.innerText ='user name: ' + data.login.username;
}

const likeBtn = document.querySelector('.heart');

//add click even listener for the heart 
likeBtn.addEventListener('click', function() {
  likeBtn.classList.toggle('liked');
});

const submitForm = document.getElementById('form');
const log = document.getElementById('log');

submitForm.addEventListener('submit',(event) =>{
    log.textContent = 'Form has been submitted'
    event.preventDefault();
    
});

