let allProducts = document.getElementById("itemsAgregados");
let contador = document.getElementById("contador");
let cantProductos = 0;

function agregarProductos(nombre, descripcion, precio, imagen){

    let productorExistente = document.getElementById('nombre');

    if(productorExistente){
        let contador = productorExistente.querySelector('.cantidad');
        let cantidad = parseInt(contador.textContent) + 1;

        contador.textContent = cantidad;

    }else{
        allProducts.innerHTML += `
        <div class="productico" onclick="modalCont(${nombre},${descripcion}, ${precio}, ${imagen})">
        <img alt="" src="${imagen}">
        <h4>${nombre}</h4>
        <h3>${descripcion}</h3>
        <p>${precio}</p>
        <p class="cantidad">1</p>
        <button onclick="mostrar()">Ver Producto</button>
        </div>
        `;
    }

    cantProductos ++;
    contador.innerHTML = cantProductos;
    
}

function mostrar(){
    document.getElementById("modal").style.display = "flex";

};

document.getElementById("quitar_modal").addEventListener("click", ()=>{
    document.getElementById("modal").style.display = "none"
});

document.getElementById("carro").addEventListener("click", () => {
    allProducts.innerHTML=``;
    let cantProductos = 0
    contador.innerHTML = cantProductos;
});