const form = document.querySelector("form");
const firstPass = document.querySelector(".first-pass");
const confirmPass = document.querySelector(".confirm-pass");
const invalidMsg = document.querySelector(".c-pass-invalid-msg");
const btn = document.querySelector("input[type='submit']")

confirmPass.addEventListener("input", (e) => {
  if(firstPass.value != e.target.value){
    confirmPass.classList.add("is-invalid");
  } else if (firstPass.value == e.target.value){
    confirmPass.classList.remove("is-invalid");
  }
  
    
});

btn.addEventListener("click", (e) => {
  if(!form.checkValidity()){
    e.preventDefault();
  }
  
  form.classList.add("was-validated");
});