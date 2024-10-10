document.querySelector("form").addEventListener("submit", function (event) {
  let email = document.getElementById("email").value;
  let confirmEmail = document.getElementById("confirm-email").value;

  if (email !== confirmEmail) {
    alert("Email addresses do not match");

    event.preventDefault();
  }
});
