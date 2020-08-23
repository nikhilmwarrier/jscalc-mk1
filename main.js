//Service worker reg.
if('serviceWorker' in navigator){
    console.log('Service worker supported!');
    window.addEventListener('load', () => {
        navigator.serviceWorker
                .register('sw.js')
                .then(reg => console.log('Service Worker Registered!'))
                .catch(err => console.log('Service Worker: Error: ${err}'))
    });
}






function Greet(){
    var ansField = document.querySelector('#ans');
        ansField.innerHTML = "Welcom to The JavaScript Calculator !";
        setTimeout(Info, 3000);

}

function Info(){
     var ansField = document.querySelector('#ans');
        ansField.innerHTML = "Please enter the numbers and choose an operation";
        setTimeout(StartPulse, 3000);
}

function StartPulse(){
      jQuery("#val1").addClass('pulse');
      setTimeout(KillPulse, 1500);
      }
 function KillPulse(){
      jQuery("#val1").removeClass('pulse');
      
      }     

function Calculate(){
var val1 = document.querySelector('#val1').value; 
var val2 = document.querySelector('#val2').value;
var operation = document.querySelector('#operation').value;
var ansField = document.querySelector('#ans');

var num1 = parseFloat(val1);
var num2 = parseFloat(val2);

var checkNaN1 = Number.isNaN(num1);
var checkNaN2 = Number.isNaN(num2);
     
    
if(checkNaN1 === true || checkNaN2 === true){ansField.innerHTML = "Please enter a valid number";}
else{
    
if(operation === "--Select--")
{
    ansField.innerHTML = "Please select an operation";
}
else if(operation === "+")
{
console.log(num1 + num2);
ansField.innerHTML = num1 + num2;
}
else if(operation === "-")
{
console.log(num1 - num2);
ansField.innerHTML = num1 - num2;
}
else if(operation === "x")
{
console.log(num1 * num2);
ansField.innerHTML = num1 * num2;
}
else if(operation === "/")
{
console.log(num1 / num2);
ansField.innerHTML = num1 / num2;
}
}
}