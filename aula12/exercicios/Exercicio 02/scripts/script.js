function verificar() {
    var resultado = document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()
    var ano_nascimento = document.getElementById('ano_nascimento')
    var idade = ano - Number(ano_nascimento.value)
    var sexo = document.getElementsByName('radsex')
    if (ano_nascimento.value == 0 || Number(ano_nascimento.value) > ano){
        resultado.innerHTML = '<p><strong>[ERRO] Ano Invalido</strong></p>'
    }
    else{
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id','imagem')
        if(sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                resultado.innerHTML  = `<p>${genero} de ${idade} anos.</p>`
                imagem.setAttribute('src','imagens/m-criança.jpg')
            }
            else if (idade <= 20){
                imagem.setAttribute('src','imagens/m-adolescente.jpg')
            }
            else if (idade <= 30){
                imagem.setAttribute('src','imagens/m-adulto.jpg')
            }
            else{    
                imagem.setAttribute('src','imagens/m-idoso.jpg')
            }
        }
        else if(sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                resultado.innerHTML  = `<p>${genero} de ${idade} anos.</p>`
                imagem.setAttribute('src','imagens/f-criança.jpg')
            }
            else if (idade <= 20){
                imagem.setAttribute('src','imagens/f-adolescente.jpg')
            }
            else if (idade <= 30){
                imagem.setAttribute('src','imagens/f-adulto.jpg')
            }
            else{
                imagem.setAttribute('src','imagens/f-idoso.jpg')
            }
        }
        resultado.innerHTML = `<p>${genero} de ${idade} anos.</p>`
        resultado.appendChild(imagem)
    }
}