const modalNota = new bootstrap.Modal(document.querySelector('#modalNota'), {})
const modalNotaB = new bootstrap.Modal(document.querySelector('#modalNotaB'), {})
const modalNotaC = new bootstrap.Modal(document.querySelector('#modalNotaC'), {})


let nota = document.querySelector('#nota');
let notaB = document.querySelector('#notaB');
let notaC = document.querySelector('#notaC');


let listaNotasA = document.querySelector('#listaNotasA');
let listaNotasB = document.querySelector('#listaNotasB');
let listaNotasC = document.querySelector('#listaNotasC');
let sNombre = document.querySelector('#sNombre');
let sContador = document.querySelector('#sContador');

let cantidad = 0;
let favoritos = [];

sContador.innerText = cantidad

function abrirModal(){
    modalNota.show();
}
function abrirModalB(){
    modalNotaB.show();
}
function abrirModalC(){
    modalNotaC.show();
}


function cerrar(){
    modalNota.hide();
}

function cerrar(){
    modalNotaB.hide();
}
function cerrar(){
    modalNotaC.hide();
}

function borrar(li){
    if( confirm('Seguro que vas a eliminar la nota?')){
        console.log(li.parentNode)
        li.parentNode.parentNode.remove();
        let datosA = listaNotasA.innerHTML;
        let datosB = listaNotasB.innerHTML;
        let datosC = listaNotasC.innerHTML;



        localStorage.setItem('notas', datosA, datosB, datosC);

        cantidad--;
        sContador.innerText = cantidad;
    }

}



function borrarFavorito( i){
    i.parentNode.remove();
}

function guardar(){
    let texto = nota.value;
    console.log(texto);
    listaNotasA.innerHTML += 
    `<li class="list-group-item d-flex justify-content-between p-2"> ${texto}
        <span class="d-flex gap-2">
            <i class="text-danger fa-solid fa-trash" onclick="borrar(this)"></i> 
        </span>
    </li>`;
    nota.value = '';

    cantidad++;
    sContador.innerText = cantidad
    let datosA = listaNotasA.innerHTML;
    localStorage.setItem('notas', datosA);
    modalNota.hide();
}
function guardar2(){
    let textoB = notaB.value;

    console.log(textoB);
    listaNotasB.innerHTML += 
    `<li class="list-group-item d-flex justify-content-between p-2"> ${textoB}
        <span class="d-flex gap-2">
            <i class="text-danger fa-solid fa-trash" onclick="borrar(this)"></i> 
        </span>
    </li>`;
    nota.value = '';
    cantidad++;
    sContador.innerText = cantidad
    let datosB = listaNotasB.innerHTML;
    localStorage.setItem('notas', datosB);
    modalNotaB.hide();
}
function guardarC(){
    let textoC = notaC.value;

    console.log(textoC);
    listaNotasC.innerHTML += 
    `<li class="list-group-item d-flex justify-content-between p-2"> ${textoC}
        <span class="d-flex gap-2">
            <i class="text-danger fa-solid fa-trash" onclick="borrar(this)"></i> 
        </span>
    </li>`;
    nota.value = '';
    cantidad++;
    sContador.innerText = cantidad
    let datosC = listaNotasC.innerHTML;
    localStorage.setItem('notas', datosC);
    modalNotaC.hide();
}

// Guarda en favoritos y cambiamos la clase
function favorito( i ){
    let texto = i.parentNode.parentNode.innerText;
    let textoB = i.parentNode.parentNode.innerText;
    let textoC = i.parentNode.parentNode.innerText;
    let nota = i.parentNode.parentNode;
    let notaB = i.parentNode.parentNode;
    let notaC = i.parentNode.parentNode;

    console.log(nota, texto, notaB, textoB, notaC, textoC);
    favoritos.push( texto )
    i.classList.toggle('fa-regular');
    i.classList.toggle('fa-solid');

    ulFavoritos.innerHTML += 
    `<li class="list-group-item d-flex justify-content-between p-2"> ${texto}
        <i class="fa-solid fa-xmark" onclick="borrarFavorito(this)"></i>    
    </li>`
}


function leer(){
    let datosA = localStorage.getItem('notas');
    let datosB = localStorage.getItem('notas');
    let datosC = localStorage.getItem('notas');
    listaNotasA.innerHTML = datosA;
    listaNotasB.innerHTML = datosB;
    listaNotasC.innerHTML = datosC;
}
