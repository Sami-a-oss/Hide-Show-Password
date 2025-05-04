const input = document.querySelector('#passwordInput');
const image = document.querySelector("#img");

image.addEventListener("click", () => {
  if(input.type == "password") {
    input.type = "text";
    image.src = "eye-open.png";
  } else {
    input.type = 'password';
    image.src = "eye-close.png";
  }
})
