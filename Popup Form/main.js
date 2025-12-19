const formToggler = document.getElementById("form-toggler");

formToggler.addEventListener("click", function () {
  const loginForm = document.querySelector(".login-form");
  loginForm.classList.toggle("shadow");
  const form = loginForm.children[0];
  form.classList.toggle("toggle-login-form");

  const label = this.innerText;
  label === "close"
    ? (this.innerText = "Open Form")
    : (this.innerText = "close");
});

function handleSubmit(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const credential = {
    email,
    password,
  };
  console.log(credential);
}
