function tabuar(){
    var num = Number(document.getElementById('num').value)
    var resultado = document.getElementById('res')
    resultado.innerText = ''
    for(var ini = 1;ini<=10;ini++){
        resultado.innerHTML += `<p>${ini} x ${num} = ${ini * num}</p>`
    }
}