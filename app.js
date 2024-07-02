const modalNota = new bootstrap.Modal(document.querySelector('#modalNota'), {})
const modalNotaB = new bootstrap.Modal(document.querySelector('#modalNotaB'), {})
const modalNotaPL = new bootstrap.Modal(document.querySelector('#modalNotaPL'), {})
let nota = document.querySelector('#nota');
let notaB = document.querySelector('#notaB');
let notaPL = document.querySelector('#notaPL');


let listaPlaylist = document.querySelector('#listaPlaylist');
let listaNotasA = document.querySelector('#listaNotasA');
let listaNotasB = document.querySelector('#listaNotasB');
let listaNotasC = document.querySelector('#listaNotasC');
let listaNotasD = document.querySelector('#listaNotasD');

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
function abrirModalPL(){
    modalNotaPL.show();
}

function cerrar(){
    modalNota.hide();
}

function cerrar(){
    modalNotaB.hide();
}

function borrar(li){
    if( confirm('Seguro que vas a eliminar la nota?')){
        console.log(li.parentNode)
        li.parentNode.parentNode.remove();
        let datosA = listaNotasA.innerHTML;
        let datosB = listaNotasB.innerHTML;

        localStorage.setItem('notas', datosA, datosB);

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


function guardarPL(){
    let textoPL = notaPL.value;

    console.log(textoPL);
    listaPlaylist.innerHTML += 
    `<section>
            <div class="boxes">
                <h1 class="name">Playlist 3</h1>
                <details>
                <summary> ${textoPL} </summary>
                <ul id="listaNotas" class="list-group">
                    
                </ul>
                <button onclick="abrirModal()" type="button" class="btn btn-success btn-nueva"><i class="fa-solid fa-plus"></i> </button>
                </details>
        </div>
        </section>`;
    nota.value = '';
    cantidad++;
    sContador.innerText = cantidad
    let datosPl = listaPlaylist.innerHTML;
    localStorage.setItem('notas', datosPl);
    modalNotaPL.hide();
}

function guardarPL1(){
    let textoPL = notaPL.value;

    console.log(textoPL);
    listaPlaylist.innerHTML += 
    `<section>
            <div class="boxes">
                <h1 class="name">Playlist 3</h1>
                <details>
                <summary> ${textoPL} </summary>
                <ul id="listaNotas" class="list-group">
                    
                </ul>
                <button onclick="abrirModal()" type="button" class="btn btn-success btn-nueva"><i class="fa-solid fa-plus"></i> </button>
                </details>
        </div>
        </section>`;
    nota.value = '';
    cantidad++;
    sContador.innerText = cantidad
    let datosPl = listaPlaylist.innerHTML;
    localStorage.setItem('notas', datosPl);
    modalNotaPL.hide();
}



// Guarda en favoritos y cambiamos la clase
function favorito( i ){
    let texto = i.parentNode.parentNode.innerText;
    let textoB = i.parentNode.parentNode.innerText;
    let nota = i.parentNode.parentNode;
    let notaB = i.parentNode.parentNode;
    console.log(nota, texto, notaB, textoB);
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
    listaNotasB.innerHTML = datosA;
    listaNotasB.innerHTML = datosB;

}



