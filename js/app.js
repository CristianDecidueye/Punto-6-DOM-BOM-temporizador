let temporizador;
let tiempoRestante = 0;

function iniciarTemporizador() {
  let tiempoInput = document.getElementById("tiempo");
  tiempoRestante = parseInt(tiempoInput.value);

  if (tiempoRestante > 0) {
    temporizador = setInterval(function() {
      tiempoRestante--;
      if (tiempoRestante >= 0) {
        actualizarDisplay();
      } else {
        pausarTemporizador();
      }
    }, 1000);
  }
}

function pausarTemporizador() {
  clearInterval(temporizador);
  actualizarDisplay();
}

function resetearTemporizador() {
  clearInterval(temporizador);
  tiempoRestante = 0;
  actualizarDisplay();
}

function actualizarDisplay() {
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;

  const formatoSegundos = segundos < 10 ? "0" + segundos : segundos;

  const display = document.getElementById("display");
  display.textContent = minutos + ":" + formatoSegundos;
}