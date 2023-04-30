//Codigo funcional

let total = 0;
const tablaGastos = document.getElementById('tabla-gastos');
const totalElemento = document.getElementById('total');
const agregarBoton = document.getElementById('agregar');
const conceptoInput = document.getElementById('concepto');
const montoInput = document.getElementById('monto');

function agregarGasto() {
  const concepto = conceptoInput.value;
  const monto = Number(montoInput.value);
  const fecha = new Date().toLocaleDateString(); // Agrega la fecha actual

  if (concepto.trim() === '' || isNaN(monto) || monto <= 0) {
    alert('Por favor ingrese un concepto y un monto válido.');
    return;
  }

  const fila = document.createElement('tr');
  const conceptoColumna = document.createElement('td');
  conceptoColumna.textContent = concepto;
  fila.appendChild(conceptoColumna);

  const montoColumna = document.createElement('td');
  montoColumna.textContent = `$${monto.toFixed(2)}`;
  fila.appendChild(montoColumna);

  const fechaColumna = document.createElement('td'); // Crea la columna para la fecha
  fechaColumna.textContent = fecha; // Asigna la fecha actual a la columna
  fila.appendChild(fechaColumna); // Agrega la columna de fecha a la fila

  const eliminarColumna = document.createElement('td');
  const eliminarBoton = document.createElement('button');
  eliminarBoton.textContent = 'Eliminar';
  eliminarBoton.classList.add('eliminar');
  eliminarBoton.addEventListener('click', () => {
    tablaGastos.removeChild(fila);
    total -= monto;
    totalElemento.textContent = `$${total.toFixed(2)}`;
  });
  eliminarColumna.appendChild(eliminarBoton);
  fila.appendChild(eliminarColumna);

  tablaGastos.appendChild(fila);
  total += monto;
  totalElemento.textContent = `$${total.toFixed(2)}`;
  conceptoInput.value = '';
  montoInput.value = '';
}

agregarBoton.addEventListener('click', agregarGasto);

//---------------------------------------------------------------------------