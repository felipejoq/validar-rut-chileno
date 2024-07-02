// Capturando el DIV alerta y mensaje
const alerta = document.getElementById("alerta");
const mensaje = document.getElementById("mensaje");
const dvInput = document.getElementById("dv");
const form = document.getElementById("form-valid-rut");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRut(form.rut);
});

// Actualizar estado y mensaje de la alerta
function updateAlert(status, msg) {
  alerta.className = `alert-${status}`;
  mensaje.innerHTML = msg;
}

// Permitir sólo números y letra K en el input
function isNumber(evt) {
  const charCode = evt.which;
  return (charCode >= 48 && charCode <= 57) || charCode === 75 || charCode === 107;
}

// Calcular Dígito Verificador
function calculateDV(rut) {
  let suma = 0;
  let multiplo = 2;
  for (let i = rut.length - 1; i >= 0; i--) {
    suma += multiplo * rut.charAt(i);
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }
  const dv = 11 - (suma % 11);
  return dv === 10 ? 'K' : dv === 11 ? '0' : String(dv);
}

function setDV(rut) {
  dvInput.value = calculateDV(rut);
}

function setClassToInputDv(isValid) {
  if (isValid) {
    dvInput.classList.add('input-show-dv-success');
    dvInput.classList.remove('input-show-dv-error');
  } else {
    dvInput.classList.add('input-show-dv-error');
    dvInput.classList.remove('input-show-dv-success');
  }
}

// Validar RUT
function checkRut(rut) {
  if (rut.value.length <= 1) {
    updateAlert('info', 'Ingrese un RUT en el siguiente campo de texto para validar si es correcto o no');
    return;
  }

  const valor = clean(rut.value);
  const bodyRut = valor.slice(0, -1);
  let dv = valor.slice(-1).toUpperCase();

  rut.value = format(valor);

  if (bodyRut.length < 7) {
    updateAlert('info', 'Ingresó un RUT muy corto, el RUT debe ser mayor a 7 Dígitos. Ej: x.xxx.xxx-x');
    return;
  }

  const dvEsperado = calculateDV(bodyRut);
  if (dvEsperado !== dv) {
    updateAlert('danger', `El RUT ingresado: ${rut.value} Es <strong>INCORRECTO</strong>.`);
    setClassToInputDv(false);
  } else {
    updateAlert('success', `El RUT ingresado: ${rut.value} Es <strong>CORRECTO</strong>.`);
    setClassToInputDv(true);
  }
  setDV(bodyRut);
}

// Formatear RUT
function format(rut) {
  rut = clean(rut);
  let result = `${rut.slice(-4, -1)}-${rut.substr(rut.length - 1)}`;
  for (let i = 4; i < rut.length; i += 3) {
    result = `${rut.slice(-3 - i, -i)}.${result}`;
  }
  return result;
}

// Limpiar RUT
function clean(rut) {
  return typeof rut === 'string' ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase() : '';
}
