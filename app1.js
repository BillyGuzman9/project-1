let today = new Date()
console.log(today);



let payments = document.getElementById('inputPayments');
let opciones = document.getElementById('opciones');
let balance =document.getElementById ('balance ');

  var  pass = document.querySelector('inputPassword');
  var form = document.querySelector("form-login#form");



  nombreUsuario= "Billy Guzmán";

var transaccion ={
    balance :500,
    deposito : "",
    retiro : "",
    payments :"",


 }
  

 
 window.onload =function(){
   mostrarDatos();
 }






function mostrarDatos(){
  document.getElementById("nombre").innerHTML = "Username : " + nombreUsuario;
  

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



function transef(){

  let inputTransferencia = document.getElementById('inputTransf');




  
}







// function enter(){
//     var pass2=1234;

//     if(pass2>=0){
//         swal('bievenido');
//       location.href="/project.html";

//     }else{
//         swal("error");
//     }


//   }
