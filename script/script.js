let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let firstname = id("fname"),
    lastname = id("lname"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
  
  errorMsg = classes("error"),
  failureIcon = classes("failure-icon");

  let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "1px solid #ff7a7a";
      
      // icon
      failureIcon[serial].style.display = "block";
    } 
    
    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "1px solid #38cc8c";
      
      // icon
      failureIcon[serial].style.display = "none";
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(firstname, 0, "First Name cannot be blank");
    engine(lastname, 1, "Last Name cannot be blank");
    engine(email, 2, "Email cannot be blank");
    engine(password, 3, "Password cannot be blank");
  });