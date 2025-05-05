function init () {
    var productos = document.getElementById("productos");
    productos = productos.innerHTML = 
        `
        <div>
        <label>
        Producto 1
        </label>
        </div>
        <input type="number" name="" id="cantidad" min="0" max="20"> 
        <button type="button" class="btn btn-primary" onclick="carrito()">Agregar</button>
        `; 
}

function carrito () {
    let carrito = document.getElementById ("carrito");
    let cantidad = document.getElementById ("cantidad").value;
    carrito.innerHTML = 
    `
    <div> 
        <h6>
        Cantidad: ${cantidad}
        </h6>
    </div>
    `
    alert ("Se agrego correctamente al carrito")

}