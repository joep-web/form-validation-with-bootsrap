const form = document.querySelector("form");
const firstPass = document.querySelector(".first-pass");
const confirmPass = document.querySelector(".confirm-pass");
const cPassInvalidMsg = document.querySelector(".c-pass-invalid-msg");
const passInvalidMsg = document.querySelector(".pass-inv-msg");
const btn = document.querySelector("input[type='submit']");

firstPass.addEventListener("input", (e) => {
  if(e.target.value == "") {
    passInvalidMsg.innerText = ""
  } else {
    passInvalidMsg.innerText = "Less than 5 characters!"
  }
});

confirmPass.addEventListener("input", (e) => {
  if(firstPass.value != e.target.value){
    confirmPass.classList.add("is-invalid");
    cPassInvalidMsg.innerText = "Passwords not equal";
  } else {
    confirmPass.classList.remove("is-invalid");
    cPassInvalidMsg.innerText = "";
  };
  
  confirmPass.pattern = `${firstPass.value}`;
});

btn.addEventListener("click", (e) => {
  if(!form.checkValidity()){
    e.preventDefault();
    confirmPass.value == ""? cPassInvalidMsg.innerText = "": null;
  }
  form.classList.add("was-validated");
});