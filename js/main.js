const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    }) 
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }



// const robotron = document.querySelector('#robotron')

                     //evento de click //nome da função anônima
// robotron.addEventListener("click", (evento) => {
//     console.log(evento)
// })

// function dizOi(nome) {
//     //console.log('oi')
//     console.log("Oi " + nome)
//     console.log("Bem-vindo ao Robotron 2000")
// }

// dizOi("Felipe")