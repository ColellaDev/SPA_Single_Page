import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universo', "/pages/universo.html")
router.add('/exploracao', "/pages/exploracao.html")
router.add( 404 , "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
// Para funcionar as setas de voltar e avançar do Browser
window.route = () => router.route()


let fundoHome = document.querySelector('.fundoHome')
let fundoExploracao = document.querySelector('.fundoExploracao')
let fundoUniverso = document.querySelector('.fundoUniverso')

let home = document.querySelector('.home')
let universo = document.querySelector('.universo')
let exploracao = document.querySelector('.exploracao')

function trocaFundoExploracao() {
    fundoHome.classList.add('hide')
    fundoUniverso.classList.add ('hide')
    fundoExploracao.classList.remove('hide')
}

function trocaFundoUniverso() {
    fundoHome.classList.add('hide')
    fundoExploracao.classList.add('hide')
    fundoUniverso.classList.remove ('hide')
}

function trocaFundoHome() {
    fundoExploracao.classList.add('hide')
    fundoUniverso.classList.add ('hide')
    fundoHome.classList.remove('hide')
}

exploracao.addEventListener('click', ()=>{
    trocaFundoExploracao();
} )

universo.addEventListener('click', ()=>{
    trocaFundoUniverso();
} )

home.addEventListener('click', ()=>{
    trocaFundoHome();
} )