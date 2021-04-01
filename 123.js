let hoy = new Date()
console.log(hoy);

function  pagar(){ 

    let balance = 300;

let pagos = prompt(' Ingrese el Número correspondiente al servicio que desee pagar '+ 
"\n" + 1 + " - Agua" + "\n" + 2 + " - Luz" + "\n" + 3 + 
" - Internet" + "\n" + 4 + "- Teléfono");

switch(pagos ){
    case"1":

    let pago1 = prompt('ingrese la cantidad de a pagar de agua ')

    let pagon1 = balance-=pago1;

    alert('su pago de   : '  + pagon1)


 break;

 case "2":
    let pago2 = prompt('ingrese la cantidad de a pagar de luz ')

    let pagon2 = balance-=pago2;

    alert('su pago de   : '   + pagon2);
   break;

  case "3":

    let pago3 = prompt('ingrese la cantidad de a pagar de intenet')

    let pagon3 = balance-=pago3;

    alert('su pago fue  : '  + pagon3);
     break;
     case "4":

        let pago4 = prompt('ingrese la cantidad de a pagar de telefono')
    
        let pagon4 = balance-=pago4;
    
        alert('su pago fue  : '  + pagon4);
         break;
    

}




}