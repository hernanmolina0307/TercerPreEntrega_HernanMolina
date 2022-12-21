var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

form_id.addEventListener('submit', (e) => {
  e.preventDefault();

  calcularTotalPrestamo();
});

if ( username == "" && password == ""){
Swal.fire({
    icon: 'success',
    title: 'Perfecto',
    text: 'Usted a ingresado correctamente!',
})

return false;
}
else{
attempt --;// Decrementing by one.
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Usted no es usuario!',
  })
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}