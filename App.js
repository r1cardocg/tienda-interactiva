const productosData = [
  { id: 1, categoria: 'ropa', nombre: 'Camiseta', precio: 20 },
  { id: 2, categoria: 'calzado', nombre: 'Tenis', precio: 50 },
  { id: 3, categoria: 'joyas', nombre: 'Pulsera', precio: 35 }
];
let carrito = [];

function init() {
  // Mostrar todos los productos al cargar
  filtrarCategoria();
}

function filtrarCategoria() {
  const categoria = document.getElementById('categoria').value;
  const cont = document.getElementById('productos');
  cont.innerHTML = '';

  // Filtrar según selección (si está vacío, mostrar todos)
  const filtrados = categoria
    ? productosData.filter(p => p.categoria === categoria)
    : productosData;

  filtrados.forEach(p => crearCard(p));
}

function crearCard(p) {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4';

  const card = document.createElement('div');
  card.className = 'card card-producto h-100';
  card.innerHTML = `
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${p.nombre}</h5>
      <p class="card-text mt-auto">$${p.precio}</p>
      <button class="btn btn-primary mt-2" onclick="agregarAlCarrito(${p.id})">
        Agregar al carrito
      </button>
    </div>
  `;

  col.appendChild(card);
  document.getElementById('productos').appendChild(col);
}

function agregarAlCarrito(id) {
  const producto = productosData.find(p => p.id === id);
  carrito.push(producto);

  // Alerta de añadido
  alert(`${producto.nombre} añadido al carrito.`);

  // Actualizar contador
  actualizarContador();
}

function actualizarContador() {
  const badge = document.getElementById('contador-carrito');
  badge.innerText = `Carrito: ${carrito.length}`;
}

function mostrarCarrito() {
  const cont = document.getElementById('carrito');
  cont.innerHTML = '<h4>Productos en el carrito:</h4>';

  if (carrito.length === 0) {
    cont.innerHTML += '<p>Tu carrito está vacío.</p>';
    return;
  }

  const list = document.createElement('ul');
  list.className = 'list-group';

  carrito.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = item.nombre;
    const span = document.createElement('span');
    span.textContent = `$${item.precio}`;
    li.appendChild(span);
    list.appendChild(li);
  });

  cont.appendChild(list);
}
