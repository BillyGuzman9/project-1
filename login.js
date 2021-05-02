let pass = 1234;
function enter() {
    let inputPassword = document.getElementById("inputPassword").value;
    if (inputPassword == pass) {
      swal("Login exitoso","","success")
      .then(()=>{
      
        location.href = "project.html";
      });
      
    } else {
      swal("Login incorrecto", "","error")
      
    }
    sessionStorage.setItem("pin", pass);
  }