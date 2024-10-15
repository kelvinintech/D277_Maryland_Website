document.querySelector("form").addEventListener("submit", function (event) {
  var email = document.getElementById("email").value;
  var confirmEmail = document.getElementById("confirm-email").value;

  if (email !== confirmEmail) {
    window.alert("Email addresses do not match");

    event.preventDefault();
  }
});
