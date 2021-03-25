let today = new Date()
console.log(today);

const password=document.getElementById('inputPassword');
let deposito= document.getElementById("inputDepositar");
let retiro = document.getElementById('inputRetirar');
let transf = document.getElementById('inputTransf');
let payments = document.getElementById('inputPayments');
let opciones = document.getElementById('opciones');
var enviar = document.getElementById('enviar');

var Account={
    nombre : "Billy Guzmán",
    password :1234,
    tarjeta : 789456,
}


var transaccion ={
     
    balance: 500,
    deposito :[],
    retiro : [],
    payments :[],


}




function enviar(){
    deposito =parseInt(inputDeposito.value )
    deposito+= balance; 
    inputDeposito.value="";



    swal('prueba');

}
let ingreso ;
let monto= 0;

enviar.addEventListener('click',  enviar);