let generate = document.querySelector("#generate");
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{};~?,./";

generate.addEventListener("click", () => {
  generatePass();
});

function generatePass() {
  let length = parseInt(document.querySelector("#length").value);
  let uppercase = document.querySelector("#uppercase").checked;
  let numbers = document.querySelector("#numbers").checked;
  let symbols = document.querySelector("#symbols").checked;
  let password = "";
  let charSet = "";
  let i = 0;

  charSet += lowerChars;
  if (uppercase === true) {
    charSet += upperChars;
  }
  if (numbers === true) {
    charSet += numberChars;
  }
  if (symbols === true) {
    charSet += symbolChars;
  }
  while (i < length) {
    i++;
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  document.querySelector("#password").value = password;
}
