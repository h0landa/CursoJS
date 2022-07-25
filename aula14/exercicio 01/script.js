c = 1
var resultado = document.getElementById('res')
function contar(){
    resultado.innerText = ''
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var ini = Number(document.getElementById('inicio').value)
    if(document.getElementById("inicio").value.length == 0 || document.getElementById("fim").value.length == 0 || document.getElementById("passo").value.length == 0){
        resultado.style.color = 'red'
        resultado.innerText = 'IMPOSSIVEL CONTAR'
    }else{
        if(ini < fim){
            for (ini; ini <= fim; ini+=passo){
                resultado.innerText += `${ini} 👉`
            }
            resultado.innerText += '🏁'
        }
        else{
            for (ini; ini >= fim; ini-=passo){
                resultado.innerText += `${ini} 👉`
            }
            resultado.innerText += '🏁'
        }
    }
}