// A01 - Form Validation - MTM1526
// This is a script file for above assignment 
// submitted by Masayo Williams
       
// Declare object that will store the form-data
let fm = document.querySelector('form'); // get <form>

// let btn = document.getElementById('submit-btn'); // get #submit-btn 

// get data from form input
let fn = document.getElementById('full-name'); // get #full-name
let em = document.getElementById('email'); // get #email
let msg = document.getElementById('message'); // get #message

// fetch .feedback & .errors
let fb = document.querySelector('.feedback'); // get .feedback
let err = document.querySelector('.errors'); // get .errors


function handleForm(ev) { // run this with data from the submitted form
   ev.preventDefault(); // hold before sending data to the server

   let userInput = {}; // obj container 
   let errors = []; // array for the error msgs
   // store regular expression for email validation
   let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 


// ****** Check FULL NAME ******
   if (fn.value !== '') { // verify if full name is entered
      // if so, save data to the object under "fullName"
      userInput.fullName = fn.value;
   } else { // if full name is not entered...
      errors.push('Please enter your name!'); // add message to "errors"
   } // end of full name check


// ****** Check EMAIL ******
   if (em.value !== '') { // verify if email is submitted, and if so...

      if (regex.test(em.value)) { // check it against regex, and if valid,
         userInput.email = em.value; // save email in userInput under "email"
      } else { // if regex test fails, 
         errors.push('Email address is invalid: ' + em.value); // add error message to 'errors'
      } 
   } else { // if no email is submitted...
      errors.push('Please enter your email!'); // add error message to 'errors'
   } // end of email check


   // ****** Check MESSAGE ******
   if (msg.value !== '') { // verify if message is submitted, and if so...
      userInput.comments = msg.value; // save message in userInput under "comments"
   } else {     // if empty...
      errors.push('Please enter your message!'); // add error message to 'errors'
   } // end of message check


   // ****** FEEDBACK/ERRORS ******

   if (errors.length === 0) { // if there is no error...
      // add text to '.feedback' <p> to display in html
      fb.textContent = 'Thank you for submitting the form! Your email: ' + em.value + ' is saved.'; 

      err.textContent = ''; // clear error messages
      fm.reset(); // clear the form

   } else { // if there are errors...
      // clear previous feedback if any
      err.textContent = ''; // clear error messages
      fb.textContent = ''; // clear feedback messages

      // output a list of error messages in <ul>:
      for (let oneErr of errors) { // go over each error message
         let li = document.createElement('li'); // create new <li>
         li.textContent = oneErr; // add error message to the new <li>
         err.appendChild(li); // put this new <li> into <ul>
      }
   } // end of FEEDBACK/ERROR if/else
} // end of handleForm()

fm.addEventListener('submit', handleForm); // call handleForm() if form is submitted