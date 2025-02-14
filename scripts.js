let allProducts = document.getElementById("itemsAgregados");
let carro = document.getElementById("contador");
let conteo = 0;

function agregarProductos(nombre, descripcion, precio, imagen){
//verificar si el producto ya fue agregado
    let productoExistente = document.getElementById(nombre);

    if (productoExistente) {
        //Si lo esta, incrementa el contador
        let contador = productoExistente.querySelector('.cantidad');
        let cantidad = parseInt(contador.textContent) + 1;
        contador.textContent = cantidad;
    }else{
        //Si no lo esta, lo agrega
        allProducts.innerHTML += `
        <div class="productico" id="${nombre}">
        <img alt="" src="${imagen}">
        <h4>${nombre}</h4>
        <h3>${descripcion}</h3>
        <p>${precio}</p>
        <p class="cantidad">1</p>
        <button onclick="mostrar()">Ver Producto</button>
        </div>
        `;
    }

    conteo ++;
    carro.innerHTML = conteo;
}


document.getElementById("carro").addEventListener("click", () => {
    allProducts.innerHTML=``;
    conteo = 0;
    carro.innerHTML = conteo;
});

function mostrar(){
    document.getElementById("modal").style.display = "flex";
};

document.getElementById("quitar_modal").addEventListener("click", ()=>{
    document.getElementById("modal").style.display = "none"
});