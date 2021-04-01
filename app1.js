let today = new Date()
console.log(today);




  var  pass = document.querySelector('inputPassword');
  var form = document.querySelector("form-login#form");

let nombreUsuario= "Billy Guzmán";

// objetos de transcciones
var transaccion ={
    balance :500,
    deposito : "",
    retiro : "",
    payments :"",

 }
  
 //función para mostrar mi usuario pantalla
 window.onload =function(){
   mostrarDatos();
  
 }


//funcion usuario-nombre
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

function transfe (){

  let tarjeta= prompt('ingrese el numero de tarjeta');
  let cantidad = prompt('Ingrese porfavor la cantida a Transferir ');

  let balanceT = transaccion.balance-=cantidad;

swal( 'su balance es  de  ' + balanceT , "la cantidad enviada fue de " + cantidad , +" al numero de tarjeta" + tarjeta );
}


function pagar(){

  let pagos = prompt(' Ingrese el Número correspondiente al servicio que desee pagar '+ 
  "\n" + 1 + " - Agua" + "\n" + 2 + " - Luz" + "\n" + 3 + 
  " - Internet" + "\n" + 4 + "- Teléfono");
  
  switch(pagos ){
      case"1":
  
      let pago1 = prompt('ingrese la cantidad de a pagar de agua ')
  
      let pagon1 = transaccion.balance-=pago1;
  
      swal('su pago de   servicio : '  + pagon1)
  
   break;
  
   case "2":
      let pago2 = prompt('ingrese la cantidad de a pagar de luz ')
  
      let pagon2 = transaccion.balance-=pago2;
  
      swal('su pago de  servicio  : '   + pagon2);
     break;
  
    case "3":
  
      let pago3 = prompt('ingrese la cantidad de a pagar de intenet')
  
      let pagon3 = transaccion.balance-=pago3;
  
      swal('su pago fue  : '  + pagon3);

        break;
       case "4":
  
          let pago4 = prompt('ingrese la cantidad de a pagar de telefono')
      
          let pagon4 = transaccion.balance-=pago4;
      
          swal('su pago fue  : '  + pagon4);

           break;
      
  
  }
  







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
