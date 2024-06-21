const form = document.getElementById('presupuesto-form');
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const producto = document.getElementById('producto');
const plazo = document.getElementById('plazo');
const extras = document.querySelectorAll('.extra');
const descuentoInput = document.getElementById('descuento');
const presupuesto = document.getElementById('presupuesto');
const presupuestoAprox = document.getElementById('presupuesto-aprox');
const aceptar = document.getElementById('aceptar');
const errorMessage = document.getElementById('error-message');

form.addEventListener('input', () => {
    // Validar datos de contacto
    if (!nombre.checkValidity() || !apellidos.checkValidity() || !telefono.checkValidity() || !correo.checkValidity()) {
        errorMessage.textContent = 'Por favor, completa todos los campos correctamente.';
        return;
    } else {
        errorMessage.textContent = '';
    }

    // Calcular presupuesto
});

form.addEventListener('submit', function (event) {
    if (!nombre.checkValidity() || !apellidos.checkValidity() || !telefono.checkValidity() || !correo.checkValidity()) {
        errorMessage.textContent = 'Por favor, completa todos los campos correctamente antes de enviar.';
        event.preventDefault();
    } else if (!aceptar.checked) {
        errorMessage.textContent = 'Debes aceptar las condiciones de privacidad.';
        event.preventDefault();
    } else {
        errorMessage.textContent = '';
    }
});

const calcularPresupuesto = function () {
    let total = parseFloat(producto.value) || 0;

    extras.forEach(extra => {
        if (extra.checked) {
            total += parseFloat(extra.value);
        }
    });

    let descuento = 15;
    if (1 <= Number(plazo.value) && Number(plazo.value) <= 6) {
        descuento = 10
    } else if (7 <= Number(plazo.value) && Number(plazo.value) <= 12) {
        descuento = 5
    } else if (Number(plazo.value) > 12) {
        descuento = 0
    }

    descuentoInput.value = `$${total * descuento / 100}`;
    
    total = total - (total * descuento / 100); // Descuento por plazo
    presupuestoAprox.value = `$${total}`;
}

producto.addEventListener('change', calcularPresupuesto)
plazo.addEventListener('change', calcularPresupuesto)
extras.forEach(function (extra) {
    extra.addEventListener('change', calcularPresupuesto)
});

document.getElementById('telefono').addEventListener('input', function(evt) {
    var telefono = evt.target.value;
    // Eliminar cualquier caracter que no sea un número
    telefono = telefono.replace(/\D/g, '');
    // Limitar la longitud a 9 dígitos
    telefono = telefono.substring(0, 9);
    // Actualizar el valor del campo de entrada
    evt.target.value = telefono;
});
