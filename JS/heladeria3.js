
let saludo;
let gusto;
let tamaño;
let resultado;

saludo = alert("Bienvenido a nuestra heladeria, a continuación tomaremos su pedido");
let gustos = {
  chocolate: {
    nombre: 'chocolate',
    precio: 650
  },
  vainilla: {
    nombre: 'vainilla',
    precio: 520
  },
  frutilla: {
    nombre: 'frutilla',
    precio: 350
  }
};
let tamaños = ['pequeño', 'mediano', 'grande'];
function Precio(gusto, tamaño) {
  let precio = 0;

  if (gusto in gustos) {
    precio = gustos[gusto].precio;

    switch (tamaño) {
      case 'pequeño':
        precio *= 1.2;
        break;
      case 'mediano':
        precio *= 1.4;
        break;
      case 'grande':
        precio *= 1.8;
        break;
      default:
        precio = 0;
        break;
    }
  }
  return precio.toFixed(2);
}
function iniciarSimulacion() {
  gusto = document.getElementById('gusto').value;
  tamaño = document.getElementById('tamaño').value;

  resultado = Precio(gusto, tamaño);

  const resultadoElement = document.getElementById('resultado');

  if (resultado > 0) {
    resultadoElement.textContent = `El precio del helado de ${gustos[gusto].nombre} en tamaño ${tamaño} es: $${resultado}`;
  } else {
    resultadoElement.textContent = 'La opción no es válida, haga otro intento.';
  }
}
function mostrarHeladosDisponibles() {
  const botonPedido = document.querySelector('button');
  const listaHelados = document.getElementById('listaHelados');

  botonPedido.style.display = 'none';
  listaHelados.style.display = 'block';
}
function guardarPedido() {
  const pedido = {
    gusto: gusto,
    tamaño: tamaño,
    precio: resultado
  };
  if (typeof(Storage) !== "undefined") {
    // Guardar el pedido en JSON storage
    localStorage.setItem("pedido", JSON.stringify(pedido));
    alert("¡El pedido ha sido guardado exitosamente!");
  } else {
    alert("algo salio mal , tu navegador no admite JSON storage.");
  }
}
