var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "@#$%^&*()_+~|{}[]<>/?-="
var allCharacters = upperCase + lowerCase + number;


var passwordBox = document.getElementById("password");
var length = 10;

function createPassword() {
    var password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (length > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value = password;

    // console.log(password);
}


function copyPassword() {
    passwordBox.select()
    document.execCommand("copy")
}



