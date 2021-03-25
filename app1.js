let today = new Date()
console.log(today);

const password=document.getElementById('inputPassword');
let deposito= document.getElementById("inputDepositar");
let retiro = document.getElementById('inputRetirar');
let transf = document.getElementById('inputTransf');
let payments = document.getElementById('inputPayments');
let opciones = document.getElementById('opciones');


var Account={
    nombre : "Billy Guzmán",
    password :1234,
    tarjeta : 789456,
}


var transaccion ={
     
    saldo: 500,
    deposito :"",
    retiro : "",


}


function next(){
    if(document.forms.password==1234){
        window.location="./project.html";
    }else{
        
    }
}