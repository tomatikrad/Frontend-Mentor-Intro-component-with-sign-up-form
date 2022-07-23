const form = document.querySelector(".login-form"),
  emailField = document.querySelector("#email"),
  passwordField = document.querySelector("#password");

let emailPattern =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

form.addEventListener(
  "submit",
  (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    checkFeald(form.elements.email, emailPattern);
    checkFeald(form.elements.password, passwordPattern);

    form.classList.add("was-validated");
  },
  false
);

emailField.addEventListener("input", (event) => {
  checkFeald(event.target, emailPattern);

  form.classList.add("email-validated");
});

passwordField.addEventListener("input", (event) => {
  checkFeald(event.target, passwordPattern);

  form.classList.add("pass-validated");
});

function checkFeald(target, pattern) {
  if (!target.value.match(pattern)) {
    target.setCustomValidity("Invalid field.");
  } else {
    target.setCustomValidity("");
  }
}
