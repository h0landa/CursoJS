c = 1
function contar(){
    var fim = Number(document.getElementById('fim').value)
    for (var ini = Number(document.getElementById('inicio').value); ini <= fim; ini++){
        console.log(ini)
    }
}