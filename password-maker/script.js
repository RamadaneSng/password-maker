let dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
let dataUppercase = dataLowercase.toUpperCase();
let dataNumber = "0123456789";
let dataSymbols = '&é#-@)=+%*:"!?)()';

const passwordView = document.getElementById("password-output");
const inputs = document.querySelectorAll('input[type="checkbox"]');
const rangeValue = document.getElementById("display-password-length");

const passwordCreator = () => {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumber);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("veillez selectionner des criteres");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    let index = Math.floor(Math.random() * data.length);
    password += data[index];
  }

  passwordView.value = password;
  passwordView.select();
  document.execCommand("copy");

  generateButtton.textContent = "copié";
  setTimeout(() => {
    generateButtton.textContent = "Generer mot de Passe";
  }, 2000);
};

generateButtton.addEventListener("click", () => {
  passwordCreator();
});
