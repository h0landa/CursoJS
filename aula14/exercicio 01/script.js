c = 1
var resultado = document.getElementById('res')
function contar(){
    resultado.innerText = ''
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var ini = Number(document.getElementById('inicio').value)
    if (ini > fim){
        resultado.style.color = 'red'
        resultado.innerText = 'IMPOSSIVEL CONTAR'
    }
    else{
        for (ini; ini <= fim; ini+=passo){
            resultado.innerText += `${ini} 👉`
        }
        resultado.innerText += '🏁'
    }
}