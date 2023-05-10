var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  let passwordLength = prompt("Enter password length (minimum 8 characters):");

  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  else if (passwordLength > 128) {
    alert("Password length must be at most 128 characters");
    return;
  } 

  let includeLowercase = confirm("Should I include lowercase characters?");
  let includeUppercase = confirm("Should I include uppercase characters?");
  let includeNumbers = confirm("Should I include numerical characters?");
  let includeSpecial = confirm("Should I include special characters?");
  let charTypes = [];
//implimenting this is what i struggled to understand at first, started with a yt vid linked in readme but it didnt function-//
//-the way i wanted it to so had to piece together different resources to make work right.//
  if (includeLowercase) charTypes.push("abcdefghijklmnopqrstuvwxyz");
  if (includeUppercase) charTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (includeNumbers) charTypes.push("1234567890");
  if (includeSpecial) charTypes.push(" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  if (charTypes.length === 0) {
    alert("At least one character type must be selected");
    return;
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let charType = charTypes[Math.floor(Math.random() * charTypes.length)];
    password = password + charType.charAt(Math.floor(Math.random() * charType.length));
  } 
  return password;
}

generateBtn.addEventListener("click", writePassword);