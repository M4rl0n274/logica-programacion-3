function submitForm(){
    var number = parseInt(document.getElementById('number').value);





var factorial = 1;
for ( var i = 2; i <= number; i ++){
    factorial *= i;
    

    
}
console.log("Factorial del numero por consola: "+factorial);

   
   

document.getElementById('resultado').innerHTML = factorial;

    
}

        


   
















