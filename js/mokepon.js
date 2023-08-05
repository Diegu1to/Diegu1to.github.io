const sectionseleccionarAtaque = document.getElementById("Seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionContinuar = document.getElementById("continuar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonIniciar = document.getElementById("boton-iniciar")
const botonContinuar = document.getElementById("boton-continuar")
const botonReiniciar = document.getElementById("boton-reiniciar") 
const botonMover = document.getElementById("botones-mover")
const playbtn = document.getElementById("playbtn")
const pausebtn = document.getElementById("pausebtn")

const sectionPortada = document.getElementById("portada")
const sectionseleccionarMascota = document.getElementById("Seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")  

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

const botonDerecha = document.getElementById("derecha")
const botonIzquierda = document.getElementById("izquierda")
const botonArriba = document.getElementById("arriba")
const botonAbajo = document.getElementById("abajo")


let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones 
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos 
let mascotaJugador
let mascotaJugadorObjeto
let ataqueAleatorio
let ataquesMokepon 
let ataquesMokeponEnemigo 
let ataques 
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []  
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src ="./assets/mokemap.webp"
let alturaQueBuscamos 
let anchoDelMapa = window.innerWidth - 20

alturaQueBuscamos = anchoDelMapa * 600 / 800
const anchoMaximoDelMapa = 350 

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
    alturaQueBuscamos = anchoDelMapa * 600 / 800
}


mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos
  
let sonido = new Audio("./assets/Peggy Gou  It Goes Like Nanana.mp3")

    playbtn.addEventListener("click", ()=>{
        sonido.play()
    })

    pausebtn.addEventListener("click", ()=>{
        sonido.pause()
    })



class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10)  {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques =  []
        this.ancho = 40
        this.alto = 40
        this.x = x
        this.y = y
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa 
        this.velocidadx = 0
        this.velocidady = 0
    } 

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.webp", 5, "./assets/hipodoge.png")

let capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.webp", 5, "./assets/capipepo.webp")

let ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.webp", 5, "./assets/ratigueya.png")

let langostelvis = new Mokepon("Langostelvis", "./assets/mokepons_mokepon_langostelvis_attack.png", 5, "./assets/langostelvis.png")

let tucapalma = new Mokepon("Tucapalma", "./assets/mokepons_mokepon_tucapalma_attack.png", 5, "./assets/tucapalma.png")

let pydos = new Mokepon("Pydos", "./assets/mokepons_mokepon_pydos_attack.png", 5, "./assets/pydos.png")

let hipodogeEnemigo = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.webp", 5, "./assets/hipodoge.png", 60, 156)

let capipepoEnemigo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.webp", 5, "./assets/capipepo.webp", 197, 10)

let ratigueyaEnemigo = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.webp", 5, "./assets/ratigueya.png", 292, 160)

let langostelvisEnemigo = new Mokepon("Langostelvis", "./assets/mokepons_mokepon_langostelvis_attack.png", 5, "./assets/langostelvis.png", 290, 60)

let tucapalmaEnemigo = new Mokepon("Tucapalma", "./assets/mokepons_mokepon_tucapalma_attack.png", 5, "./assets/tucapalma.png", 96, 65)

let pydosEnemigo = new Mokepon("Pydos", "./assets/mokepons_mokepon_pydos_attack.png", 5, "./assets/pydos.png", 200, 150)


hipodoge.ataques.push (
    { nombre: "💦", id: "boton-agua"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌎", id: "boton-tierra"},
)

hipodogeEnemigo.ataques.push (
    { nombre: "💦", id: "boton-agua"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌎", id: "boton-tierra"},
)

capipepo.ataques.push (
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "💦", id: "boton-agua"},
)

capipepoEnemigo.ataques.push (
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "💦", id: "boton-agua"},
)

ratigueya.ataques.push (
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
)

ratigueyaEnemigo.ataques.push (
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
)

langostelvis.ataques.push (
    { nombre: "💦", id: "boton-agua"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌎", id: "boton-tierra"},
)

langostelvisEnemigo.ataques.push (
    { nombre: "💦", id: "boton-agua"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌎", id: "boton-tierra"},
)

tucapalma.ataques.push (
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
)

tucapalmaEnemigo.ataques.push (
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
)

pydos.ataques.push (
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "💦", id: "boton-agua"}, 
)

pydosEnemigo.ataques.push (
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "🌎", id: "boton-tierra"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "💦", id: "boton-agua"}, 
)

mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)

function portada() {



    sectionPortada.style.display = "flex"
    sectionseleccionarMascota.style.display = "none"

  
    
    
}

function iniciarJuego(){

    portada()
   
    sectionseleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionVerMapa.style.display = "none" 
    sectionContinuar.style.display = "none"  
 
    

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type ="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputHipodoge = document.getElementById("Hipodoge")
     inputCapipepo = document.getElementById("Capipepo")
     inputRatigueya = document.getElementById("Ratigueya")
     inputLangostelvis = document.getElementById("Langostelvis")
     inputTucapalma = document.getElementById("Tucapalma")
     inputPydos = document.getElementById("Pydos")

    })

    

   botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

   botonReiniciar.addEventListener("click", reiniciarJuego)

   botonContinuar.addEventListener("click", continuarJuego)

   botonIniciar.addEventListener("click", empezar)

  



     

}

function seleccionarMascotaJugador() {     
        
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else {
        alert("SELECCIONA UNA MASCOTA")
        return
    } 

    sectionseleccionarMascota.style.display = "none"


    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
}

function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }      
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque"> ${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon 
    })

    botonAgua = document.getElementById("boton-agua")
    botonFuego = document.getElementById("boton-fuego")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")

      
}

function secuenciaAtaque() {
        botones.forEach((boton) => {
            boton.addEventListener("click", (e) => {
                if (e.target.textContent === " 🔥 " ) {
                    ataqueJugador.push("FUEGO")
                    console.log(ataqueJugador)
                    boton.style.background = "#82CD47"
                    boton.disabled = true
                } else if (e.target.textContent === " 💦 " ) {
                    ataqueJugador.push("AGUA")
                    console.log(ataqueJugador)
                    boton.style.background = "#82CD47"
                    boton.disabled = true
                } else {
                    ataqueJugador.push("TIERRA")
                    console.log(ataqueJugador)
                    boton.style.background = "#82CD47"
                    boton.disabled = true
                } 
                if (ataqueJugador.length === 5) { 
                } 
                ataqueAleatorioEnemigo() 
            })
        })
     
}

function seleccionarMascotaEnemigo(enemigo) {

    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()  
    console.log(ataqueEnemigo)
    console.log(ataquesMokeponEnemigo)
}

function ataqueAleatorioEnemigo() {
    console.log("Ataque enemigo", ataquesMokeponEnemigo)
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)      

    ataqueEnemigo.push(ataquesMokeponEnemigo[ataqueAleatorio].id.split("-")[1].toUpperCase())

    ataquesMokeponEnemigo.splice(ataqueAleatorio, 1)
  
    console.log(ataqueEnemigo);
    iniciarPelea()
}         

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }

}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE") 
        } else if(ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador             
        } else if(ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador    
        } else if(ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador   
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo  
        }
    }

    revisarVidas()
}

function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un Empate")
    } else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("FELICITACIONES! ganaste")
    } else {
        crearMensajeFinal("Lo siento, perdiste")
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    
    sectionMensajes.innerHTML = resultadoFinal

    sectionContinuar.style.display = "block" 
    sectionReiniciar.style.display = "block"
    
}

function empezar() {

    sectionPortada.style.display = "none"
    sectionseleccionarMascota.style.display = "flex"

}

function continuarJuego() {

    sectionseleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "flex"
    

    moverArriba()
    moverAbajo()
    moverDerecha()
    moverIzquierda()
    detenerMovimiento()


    window.addEventListener("keydown", sePresionoUnaTecla)

    window.addEventListener("keyup", detenerMovimiento)
    
    console.log("hola")
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio (min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadx
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidady
    lienzo.clearRect(0, 0, mapa.width, mapa.height,)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )

    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()

    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(tucapalmaEnemigo)
        revisarColision(pydosEnemigo)
    }
}

function moverArriba() {
    mascotaJugadorObjeto.velocidady = - 5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidady = 5
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadx = 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadx = - 5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadx = 0
    mascotaJugadorObjeto.velocidady = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowRight":
            moverDerecha()
            break
        case "ArrowLeft":
            moverIzquierda()
            break   
        default:
            break
    }
}

function iniciarMapa() {

    mascotaJugadorObjeto = obtenerObjetosMascota(mascotaJugador)
    console.log(mascotaJugadorObjeto, mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
   
    window.addEventListener("keydown", sePresionoUnaTecla)

    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetosMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }      
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log("se detecto una colision"); 
    sectionseleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
}


window.addEventListener("load" , iniciarJuego)
