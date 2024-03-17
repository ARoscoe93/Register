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
  for (let i = 0; i < array.length; i++) {
    if (userName === array[i]) {
      console.log("This Username has been Taken");
      alert("This username has already been taken. Please choose another one.");
      return;
    }
  }
  formValidate(userName, email, password);
}

function formValidate(usernameVar, emailVar, passwordVar) {
  if (!usernameVar || !emailVar || !passwordVar) {
    console.log("All form fields must be filled out");
    alert("All form fields must be filled out.");
    return;
  }

  if (passwordVar.length < 8) {
    console.log("Password must be at least 8 characters long");
    alert("Password must be at least 8 characters long.");
    return;
  }

  // Simple email validation
  const emailPattern = /\S+@\S+\.\S+/;
  if (!emailPattern.test(emailVar)) {
    console.log("Invalid email address");
    alert("Invalid email address. Please enter a valid email.");
    return;
  }

  // All checks passed, registration successful
  console.log("Registration Successful");
  registered = true;
  renderProfile(registered);
}

function renderProfile(registeredBoolean) {
  if (registeredBoolean == true) {
    formContainer.style.display = "none";
    profileContainer.style.visibility = "visible";
    profileContainer.innerHTML = "<h1>Welcome to Your Profile!</h1>";
  }
}
