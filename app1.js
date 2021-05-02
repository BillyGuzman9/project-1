var constraints = {
  creditCardNumber: {
    presence: true,
    format: {
      pattern: /^(34|37|4|5[1-5]).*$/,
      message: function (
        value,
        attribute,
        validatorOptions,
        attributes,
        globalOptions
      ) {
        return validate.format(`${value} no es una tarjeta valida`, {
          num: value,
        });
      },
    },
    length: function (value, attributes, attributeName, options, constraints) {
      if (value) {
        if (/^(34|37).*$/.test(value)) return { is: 15 };

        if (/^(4|5[1-5]).*$/.test(value)) return { is: 16 };
      }
      // Unknown card, don't validate length
      return false;
    },
  },
};  

let today = new Date();
console.log(today);

let nombreUsuario = "Ash ketchum";
let Cuenta = 987654321;
let pass = 1234;
localStorage.setItem("usuario", nombreUsuario);

localStorage.setItem("Número de cuenta ", Cuenta);
localStorage.setItem("pin", pass);

// objetos de transcciones
transaccion = {
  balance: 500, //Saldo inicial
};

if (
  localStorage.getItem("HistorialNombre") === null &&
  localStorage.getItem("HistorialValor") === null
) {
  let historial = ["inicial"];
  let historialValor = [transaccion.balance];
  
  localStorage.setItem("HistorialNombre", JSON.stringify(historial));
  localStorage.setItem("HistorialValor", JSON.stringify(historialValor));
} else {

  let balance = JSON.parse(localStorage.getItem("HistorialValor"));
  transaccion.balance = balance[balance.length - 1];

}
function ActualizarHistorial(nombre, valor) {

  let historial = JSON.parse(localStorage.getItem("HistorialNombre"));
  let historialValor = JSON.parse(localStorage.getItem("HistorialValor"));
  historial.push(nombre);
  historialValor.push(valor);

  localStorage.setItem("HistorialNombre", JSON.stringify(historial));
  localStorage.setItem("HistorialValor", JSON.stringify(historialValor));
}
//función para mostrar mi usuario pantalla
window.onload = function () {
  mostrarDatos();
};

//funcion usuario-nombre, cuenta
function mostrarDatos() {
  document.getElementById("nombre").innerHTML = "Username : " + nombreUsuario;
  document.getElementById("cuenta").innerHTML = " Cuenta   :  " + Cuenta;
}

function depositar() {
  let inputDeposito = document.getElementById("inputDepositar");

  let valorADepositar = parseInt(inputDeposito.value);
  if (validate.isNumber(valorADepositar)) {
    transaccion.balance += valorADepositar;
    inputDeposito.value = "";

    swal("su balance nuevo es: " + transaccion.balance, "", "success");
    ActualizarHistorial("deposito", transaccion.balance);
  } else {
    swal("error", "el valor ingresado no es un numero", "error");
  }
}
let enviar = document.getElementById("enviar");
if (enviar) {
  enviar.addEventListener("click", depositar);
}

function retiro() {
  let inputRetiro = document.getElementById("inputRetirar");

  let valorARetirar = parseInt(inputRetiro.value);
  if (validate.isNumber(valorARetirar)) {
    transaccion.balance -= valorARetirar;
    inputRetiro.value = "";
    swal("su balance nuevo es: " + transaccion.balance, "", "success");

    ActualizarHistorial("retiro", transaccion.balance);
  } else {
    swal("error", "el valor ingresado no es un numero", "error");
  }
}

function transfe() {
  swal({
    title: "ingrese el numero de tarjeta",
    content: {
      element: "input",
    },
  }).then(function (value) {
    let tarjeta = value;
    let validation = validate({ creditCardNumber: tarjeta }, constraints);
    if (validation === undefined) {
      swal({
        title: "ingrese la cantidad a enviar",
        content: {
          element: "input",
        },
      }).then(function (value) {
        let cantidad = value;
        if (cantidad > transaccion.balance) {
          swal(
            `saldo insuficiente: su saldo actual es de ${transaccion.balance} pero decea enviar ${cantidad}`
          );
        } else {
          transaccion.balance -= cantidad;
          swal(
            `su balance es  de ${transaccion.balance}`,
            `la cantidad enviada fue de ${cantidad} al numero de tarjeta ${tarjeta}`
          );

          ActualizarHistorial("transferencia", transaccion.balance);
        }
      });
    } else {
      swal("error", validation.creditCardNumber[0], "error");
    }
  });
}

function pagar() {
  swal(
    `
    1 - Agua \n
    2 - Luz \n
    3 - Internet \n
    4 - Telefono \n
    `,
    {
      title: "Ingrese el Número correspondiente al servicio que desee pagar ",
      content: {
        element: "input",
      },
    }
  ).then(function (pagos) {
    switch (pagos) {
      case "1":
        swal("ingrese la cantidad de a pagar de agua ", {
          content: {
            element: "input",
          },
        }).then(function (value) {
          if (validate.isNumber(parseInt(value))) {
            let pago1 = value;
            transaccion.balance -= pago1;
            swal(
              "su pago de   servicio de agua, nuevo saldo : " +
              transaccion.balance,
              "",
              "success"
            );
            
            ActualizarHistorial("pago agua", transaccion.balance);
          } else {
            swal("error", "la catidad no es un valor numerico", "error");
          }
        });

        break;

      case "2":
        swal("ingrese la cantidad de a pagar de Luz ", {
          content: {
            element: "input",
          },
        }).then(function (value) {
          if (validate.isNumber(parseInt(value))) {
            let pago2 = value;
            transaccion.balance -= pago2;
            swal(
              "su pago de servicio de luz, nuevo saldo: " + transaccion.balance,
              "",
              "success"
            );

            ActualizarHistorial("pago Luz", transaccion.balance);
          } else {
            swal("error", "la catidad no es un valor numerico", "error");
          }
        });

        break;

      case "3":
        swal("ingrese la cantidad de a pagar de Internet ", {
          content: {
            element: "input",
          },
        }).then(function (value) {
          if (validate.isNumber(parseInt(value))) {
            let pago3 = value;
            transaccion.balance -= pago3;
            swal(
              "su pago de servicio de Internet, nuevo saldo: " +
              transaccion.balance,
              "",
              "success"
            );

            ActualizarHistorial("pago Internet", transaccion.balance);
          } else {
            swal("error", "la catidad no es un valor numerico", "error");
          }
        });
        break;
      case "4":
        swal("ingrese la cantidad de a pagar de Teléfono ", {
          content: {
            element: "input",
          },
        }).then(function (value) {
          if (validate.isNumber(parseInt(value))) {
            let pago4 = value;
            transaccion.balance -= pago4;
            swal(
              "su pago de servicio de Teléfono, nuevo saldo: " +
              transaccion.balance,
              "",
              "success"
            );

            ActualizarHistorial("pago Teléfono", transaccion.balance);
          } else {
            swal("error", "la catidad no es un valor numerico", "error");
          }
        });
        break;
        default:
          swal("error", "opcion no valida", "error");
        break;
    }
  });
}

function graficas() {
  location.href = "graficas.html";
 
}
