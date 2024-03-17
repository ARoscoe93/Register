let userName = '';
let email = '';
let password = '';
let userExists = false;
let registered = false;
const formContainer = document.getElementById("form-container");
const profileContainer = document.getElementById("profile-container");

const userDatabase = ["John", "Jane", "Bob", "Ashley"];

function formInput(e) {
  e.preventDefault();
  userName = e.target.username.value;
  email = e.target.email.value;
  password = e.target.password.value;
  checkExistingUser(userDatabase);
}

function checkExistingUser(array) {
  for (i = 0; i < array.length; i++)
  if(userName === array[i]){
    console.log("This Username has been Taken");
    return true;
  }
  formValidate(userName, email, password);
}

function formValidate(usernameVar, emailVar, passwordVar) {
  if (usernameVar && emailVar && passwordVar) {
    console.log("Registration Successful");
    registered = true;
  } else {
    console.log("All form fields must be filled out");
  }
  renderProfile(registered);
}

function renderProfile(registeredBoolean) {
  if (registeredBoolean == true) {
    formContainer.setAttribute("id", "none");
    profileContainer.style.visibility = "visible";
  }
}