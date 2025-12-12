let res = document.getElementById('res')

function principal(){
    let W = Number(document.getElementById('W').value)
    let tempo = Number(document.getElementById('tempo').value)
    let Kwh = (W * tempo) / 1000 * 30

    console.log(`A sua placa solar de ${W} W de potência`)
    console.log(`irá gerar uma quantidade de ${Kwh} por ${tempo}.`)

    res.innerHTML = ``
    res.innerHTML += `A sua placa solar de ${W} W de potência <br>`
    res.innerHTML += `irá gerar uma quantidade de ${Kwh.toFixed(2)} kWh mensalmente. <br>`
}