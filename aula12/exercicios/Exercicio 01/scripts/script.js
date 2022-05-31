function seeHoras(){
    var data = new Date()
    var hora = data.getHours()
    var resultado = document.getElementById('res')
    var imagem = document.getElementById('imagem')
    var corpo = document.getElementById('corpo')
    if (hora > 0 && hora < 12){
        resultado.innerHTML = `São ${hora} horas.`
        imagem.src = 'imagens/manha.jpg'
        corpo.style.background = '#E3CB12'
    }else if (hora >= 12 && hora < 18){
        resultado.innerHTML = `São ${hora} horas.`
        imagem.src = 'imagens/tarde.jpg'
        corpo.style.background = '#FF9601'
    }
    else{
        resultado.innerHTML = `São ${hora} horas.`
        imagem.src = 'imagens/noite.jpg'
        corpo.style.background = '#211A02'
        
    }
}