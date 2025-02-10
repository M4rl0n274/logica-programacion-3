function submitForm() {
  var number = parseInt(document.getElementById("number").value);

  switch (number) {
    case 0:
    case 1:
      console.log("Para el numero 0 y 1 el factorial es: 1");
      document.getElementById("resultado").innerHTML =
        "Para el numero 0 y 1 el factorial es: " + 1;
      break;
    default:
      var factorial = 1;
      for (var i = 2; i <= number; i++) {
        factorial *= i;
      }
      console.log("Factorial del numero por consola: " + factorial);

      document.getElementById("resultado").innerHTML =
        "El factorial del número es: " + factorial;
  }
}

