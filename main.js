const formulario = document.getElementById('form');

const nombre = document.getElementById('firstName');
const apellido = document.getElementById('lastName');
const email = document.getElementById('email');
const monto = document.getElementById('monto');
const cuotas = document.getElementById('cuotas');

const montoFinal = document.getElementById('total');
const cuotasFinales = document.getElementById('ccuotas');
const intereses = document.getElementById('intereses');
const totalADevolver = document.getElementById('totalAmount');
const valorPorCuota = document.getElementById('valorPorCouta');

const tasa = 0.07; // 70%

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    calcularTotalPrestamo();
});
    
const calcularTotalPrestamo = () => {
    const intereses = tasa * monto.value; 
    const cuotas = intereses / cuotas.value;
    const total = cuotas + monto.value;
    const valorPorCuota = total / cuotas.value;
    const prestamo = construirPrestamo(monto.value, intereses, cuotas, valorPorCuota, total);
    pintarPrestamo(prestamo);
    guardarPrestamoStorage(prestamo);
};
  
    (prestamo) => {
        montoFinal.innerText = `$${prestamo.monto}`;
        intereses.innerText = `$${prestamo.intereses}`;
        cuotasFinales.innerText = `${prestamo.cuotas}`;
        valorPorCuota.innerText = `${prestamo.valorCouta}`;
        totalADevolver.innerText = `$${prestamo.total}`;
    }

const construirPrestamo = (montoValue, interesesValue, cuotasValue, valorCouta, totalValue) => {
    return {
        monto: montoValue,
        intereses: interesesValue,
        cuotas: cuotasValue,
        valorPorCuota: valorValue,
        total: totalValue,
    }
};

const guardarPrestamoStorage = (prestamo) => {
    localStorage.setItem('prestamo', JSON.stringify(prestamo))
};

const obtenerPrestamoStorage = () => {
    const prestamoStorage = JSON.parse(localStorage.getItem('prestamo'));
    return prestamoStorage;
};


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('prestamo')) {
        const prestamoStorage = obtenerPrestamoStorage();
        
    }
})
const simulate = document.getElementById('simulate');
formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    
    if (form.checkValidity()) {
    
    Swal.fire({
    
    icon: "success",
    
    title: "Simulacion realizada",
    
    text: "Enviaremos a su correo la informacion!"
    
    })
    
    }
    
    calcularTotalPrestamo();
    
    });
