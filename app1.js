let today = new Date()
console.log(today);



let transf = document.getElementById('inputTransf');
let payments = document.getElementById('inputPayments');
let opciones = document.getElementById('opciones');
let balance =document.getElementById ('balance ');

  var  pass = document.querySelector('inputPassword');
  var form = document.querySelector("form-login#form");



 var account={
    nombre : "Billy Guzmán",
   pass :1234,
    tarjeta : 789456,
 }

var transaccion ={
    balance :500,
    deposito : "",
    retiro : "",
    payments :"",


 }

function depositar() {
  
  let inputDeposito = document.getElementById('inputDepositar');
  let valorADepositar = parseInt(inputDeposito.value);
  transaccion.balance +=valorADepositar;
  inputDeposito.value = '';
  swal('su balance nuevo es: '+transaccion.balance);
}

enviar.addEventListener('click', depositar)



function retiro () {

  let inputRetiro = document.getElementById('inputRetirar');
  let valorARetirar = parseInt(inputRetiro.value);
  transaccion.balance -=valorARetirar;
  inputRetiro.value = '';
  swal('su balance nuevo es: '+transaccion.balance);

}










/*var enviar = document.getElementById('enviar');
// enviar.addEventListener('click', deposit);

function enter(){
    var pass2=1234;

    if(pass2>=0){
        swal('bievenido');
      location.href="/project.html";

    }else{
        swal("error");
    }


  };*/
