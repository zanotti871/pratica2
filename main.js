class Zapatillas {
  constructor(id, marca, precio, talle) {
    this.id = id;
    this.marca = marca;
    this.precio = precio;
    this.talle = talle;
  }
}

let productos = [
  { id: 1, marca: "Nike", precio: 25000 },
  { id: 2, marca: "Adidas", precio: 45000 },
  { id: 3, marca: "Puma", precio: 20000 },
  { id: 4, marca: "Reeboock", precio: 25000 },
];

function mostrarProducto(id) {
  const producto = productos.find((p) => p.id === id);
  if (producto) {
    alert(
      `Producto seleccionado:\n\nID: ${producto.id}\nMarca: ${producto.marca}\nPrecio: ${producto.precio}`
    );
  } else {
    alert("No se encontró el producto con el ID ingresado");
  }
}
// función cargar datos del producto
function cargarProducto() {
  let id = parseInt(prompt("Ingrese el ID del producto"));
  let marca = prompt("Ingrese la marca del producto");
  let precio = parseInt(prompt("Ingrese el precio"));
  let talle = prompt("Ingrese el talle");
  const nuevoProducto = new Zapatillas(id, marca, precio, talle);
  nuevoProducto.cantidad = parseInt(prompt("Ingrese la cantidad de productos"));
  arrayCarrito.push(nuevoProducto);
  alert("Producto agregado al carrito");
}
// función nuestra la oferta
function mostrarOferta() {
  let mensaje = "Ofertas disponibles:\n\n";
  productos.forEach((producto) => {
    mensaje += `ID: ${producto.id}\nMarca: ${producto.marca}\nPrecio: ${producto.precio}\n\n`;
  });
  alert(mensaje);
}

function verCarrito() {
  if (arrayCarrito.length === 0) {
    alert("El carrito está vacío");
  } else {
    let mensaje = "Productos en el carrito:\n\n";
    arrayCarrito.forEach((producto) => {
      mensaje += `Marca: ${producto.marca}\nTalle: ${producto.talle}\nPrecio: ${producto.precio}\nCantidad: ${producto.cantidad}\n\n`;
    });
    alert(mensaje);
  }
}

function finalizarCompra() {
  let total = 0;
  let mensaje = "Detalles de la compra:\n\n";
  arrayCarrito.forEach((producto) => {
    const subtotal = producto.precio * producto.cantidad;
    mensaje += `Producto: ${producto.marca}\nUnidades: ${producto.cantidad}\nPrecio unitario: ${producto.precio}\nSubtotal: ${subtotal}\n\n`;
    total += subtotal;
  });
  const totalConIVA = total * 1.21; // Aplicando un IVA del 21%

  let formaPago = prompt(
    "Seleccione la forma de pago:\n1. Transferencia bancaria\n2. Tarjeta de crédito"
  );

  let mensajePago = "Forma de pago seleccionada: ";
  let montoFinal = 0;

  if (formaPago === "1") {
    mensajePago += "Transferencia bancaria\n";
    montoFinal = totalConIVA;
  } else if (formaPago === "2") {
    mensajePago += "Tarjeta de crédito\n";
    let cuotas = parseInt(
      prompt("Seleccione la cantidad de cuotas (1, 2 o 3)")
    );
    if (cuotas >= 1 && cuotas <= 3) {
      montoFinal = totalConIVA / cuotas;
      mensajePago += `Cuotas: ${cuotas}\n`;
    } else {
      mensajePago += "Cantidad de cuotas no válida\n";
      montoFinal = totalConIVA;
    }
  } else {
    mensajePago += "Forma de pago no válida\n";
    montoFinal = totalConIVA;
  }

  mensaje += `Total a pagar (IVA incluido): ${totalConIVA}\n`;
  mensaje += `Monto a pagar por cuota: ${montoFinal}\n\n`;
  mensaje += mensajePago;

  alert(mensaje);
}

let arrayCarrito = [];

let nombreUsuario = prompt("Ingrese su nombre");
alert(`¡Bienvenido/a, ${nombreUsuario}!`);

mostrarOferta();

let opcion = prompt(
  "Ingrese una opción: \n 1: Mostrar producto \n 2: Cargar producto \n 3: Mostrar oferta \n 4: Ver carrito \n 5: Finalizar compra \n 6: Salir"
);

while (opcion !== "6") {
  if (opcion === "1") {
    let id = parseInt(prompt("Ingrese el ID del producto a mostrar"));
    mostrarProducto(id);
  }
  if (opcion === "2") {
    cargarProducto();
  }
  if (opcion === "3") {
    mostrarOferta();
  }
  if (opcion === "4") {
    verCarrito();
  }
  if (opcion === "5") {
    finalizarCompra();
  }
  opcion = prompt(
    "Vuelva a ingresar una opción: \n 1: Mostrar producto \n 2: Cargar producto \n 3: Mostrar oferta \n 4: Ver carrito \n 5: Finalizar compra \n 6: Salir"
  );
}

alert("¡Hasta pronto! Gracias por visitarnos.");
