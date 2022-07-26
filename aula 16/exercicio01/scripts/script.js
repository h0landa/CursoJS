var alerta = document.getElementById('alerta')
var resultados = document.getElementById('res')
var numeros = []
function analisar_num(){
    var numero = Number(document.getElementById('numero').value)
    if (numeros.includes(numero) == false){
        if(numero > 100){
            alerta.innerHTML = "<div class='alert alert-danger' role='alert'>O número digitado é <strong>maior que 100!</strong></div>"
        }else{
            numeros.push(numero)
            alerta.innerHTML = `<div class="alert alert-success" role="alert">${numero} Cadastrado com sucesso!</div>`
        }
    }else{
        alerta.innerHTML = "<div class='alert alert-danger' role='alert'>Esse número já está cadastrado!</div>"    
    }
    console.log(numeros)
}
function analisar_array(){
    var maior = Math.max.apply(null, numeros)
    var menor = Math.min.apply(null, numeros)
    var soma = 0
    for(var i = 0; i < numeros.length; i++){
        soma += numeros[i]
    }
    var media = soma/numeros.length
    resultados.innerHTML = `<p>Maior número: ${maior}</p>
    <p>Menor valor: ${menor}</p>
    <p>Quantidade de números: ${numeros.length}</p>
    <p>Soma dos valores: ${soma}</p>
    <p>Media dos valores: ${media}</p>`

}