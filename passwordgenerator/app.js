document.getElementById("btn").addEventListener("click", function() {
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var specialCharacters = "!@#$%^&*()_+{}[]:;.,?";
    var numbers = "0123456789";
    var passwordLength = 16;
  
    var allChars = uppercaseLetters + lowercaseLetters + specialCharacters + numbers;
    var password = "";
  
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    document.getElementById("password").value = password;
  });
  