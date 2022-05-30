function seeHoras(){
    var data = new Date()
    var hora = data.getHours()
    var resultado = document.getElementById('res')
    var imagem = document.getElementById('imagem')
    if (hora > 0 && hora < 12){
        resultado.innerHTML = `São ${hora} horas.`
        imagem.src = 'imagens/manha.jpg'
    }else if (hora >= 12 && hora < 18){
        resultado.innerHTML = `São ${hora} horas.`
        imagem.src = 'imagens/tarde.jpg'
    }
    else{
        resultado.innerHTML = `São ${hora} horas.`
        imagem.src = 'imagens/noite.jpg'
        
    }
}