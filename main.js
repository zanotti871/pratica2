// Objeto con los productos y sus precios
let productos = [
  { nombre: "leche", precio: 250.0 },
  { nombre: "pan", precio: 700.3 },
  { nombre: "arroz", precio: 180.0 },
  { nombre: "fideos", precio: 258.0 },
];

let costoTotal = 0;
let carrito = [];

let nombreUsuario = prompt(
  "¡Bienvenido  a tu supermercado Virtual!\nPor favor, ingrese su nombre:"
).toLowerCase();

if (nombreUsuario) {
  alert(`Hola ${nombreUsuario}! Bienvenido al supermercado virtual.`);
} else {
  alert("¡Hola! Bienvenido al supermercado virtual.");
}

while (true) {
  let opcionesProductos = "";
  for (let i = 0; i < productos.length; i++) {
    opcionesProductos += `${i + 1}. ${productos[i].nombre} - $${
      productos[i].precio
    }\n`;
  }

  let productoElegido = parseInt(
    prompt(
      `Seleccione un producto de la lista:\n${opcionesProductos}\n(Ingrese el número correspondiente)\n(Presione Cancelar para finalizar la selección)`
    )
  );
  if (isNaN(productoElegido)) {
    if (carrito.length === 0) {
      alert("No ha seleccionado ningún producto. El proceso se finalizará.");
      break;
    } else {
      let finalizarCompra = confirm("¿Desea finalizar la compra?");
      if (finalizarCompra) {
        break;
      } else {
        continue;
      }
    }
  }

  if (productoElegido >= 1 && productoElegido <= productos.length) {
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));

    // Obtener el producto seleccionado
    let productoSeleccionado = productos[productoElegido - 1];

    // Calcular el costo total del producto
    let costoProducto = productoSeleccionado.precio * cantidad;

    // Agregar el producto al carrito
    carrito.push({
      nombre: productoSeleccionado.nombre,
      cantidad: cantidad,
      costo: costoProducto,
    });

    costoTotal += costoProducto;
  } else {
    alert(
      "Producto no válido. Por favor, seleccione un número de producto válido."
    );
  }

  let seguirComprando = confirm("¿Desea seguir comprando?");
  if (!seguirComprando) {
    let finalizarCompra = confirm("¿Desea finalizar la compra?");
    if (finalizarCompra) {
      break;
    }
  }
}

if (carrito.length > 0) {
  // Imprimir los productos seleccionados en el carrito
  console.log("Productos seleccionados:");
  for (let i = 0; i < carrito.length; i++) {
    console.log(
      `- ${carrito[i].cantidad} ${carrito[i].nombre}: $${carrito[
        i
      ].costo.toFixed(2)}`
    );
  }

  // Forma de pago
  let formaPago = prompt(
    "Seleccione una forma de pago:\n1. Transferencia (10% de descuento)\n2. Tarjeta de crédito (Visa o Mastercard, hasta 3 pagos sin interés)"
  );

  let costoFinal = costoTotal;

  switch (formaPago) {
    case "1": // Transferencia
      costoFinal *= 0.9; // Aplicar descuento del 10%
      break;
    case "2": // Tarjeta de crédito
      let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (hasta 3):"));
      if (cuotas > 3) {
        cuotas = 3;
      }
      costoFinal /= cuotas; // Dividir el costo total en cuotas sin interés
      break;
    default:
      alert(
        "Forma de pago no válida. Se calculará el costo sin descuentos ni cuotas."
      );
  }

  // Calcular el IVA
  const iva = 0.21;
  costoFinal *= 1 + iva; // Aplicar el 21% de IVA

  alert(`El costo total de su compra es: $${costoTotal.toFixed(2)}`);
  alert(
    `El costo final a pagar (incluyendo el 21% de IVA) es: $${costoFinal.toFixed(
      2
    )}`
  );
}

alert("¡Gracias por utilizar por compra! ¡Hasta la próxima!");
