


const key = "066c5fb130ff164051a7494c74301727"

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML =Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML= dados.weather[0].description
    document.querySelector(".umd").innerHTML = dados.main.humidity +"%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icom}.png `


}


async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pr-br&units=metric`).then(resposta => resposta.json())
 
    colocarDadosNaTela(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
} 9
