let intervalo;

function iniciar() {
  intervalo = setInterval(() => {
    console.log("Intervalo de 1 segundo!");
  }, 1000);
}

function parar() {
  clearInterval(intervalo);
  console.log("Parar intervalo!");
}

iniciar();

setTimeout(() => {
  parar();
}, 3000);