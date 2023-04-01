let v = document.querySelector("#verificar")

v.addEventListener('click', verificar)

function verificar(){
    // dados usuário
    let anoNasc = document.querySelector("#yearBirth")
    let sexo = document.getElementsByName("options")

    // acessando a tag
    let resposta = document.querySelector("#resposta")
    let resultado = document.querySelector(".resultado")
    
    // calculando idade
    let newDate = new Date()
    let anoAtual = newDate.getFullYear()
    let idade = anoAtual - Number(anoNasc.value)

    // detectando o que o radio está recebendo
    let genero = ''
    if (sexo[0].checked){
        genero = "Homem"
    }else if (sexo[1].checked){
        genero = "Mulher"
    }

    // mostando resultado

    if(anoNasc.value.length == 0 || anoNasc.value > anoAtual){
        window.alert('Verifique os dados e tente novamente.')
    }
    else{
        resposta.innerHTML = `${genero} de ${idade} anos`

        // criando um elemento img
        let img = document.createElement('img')
        img.setAttribute('id', 'img') // adicionando um atributo 
        img.style.width = '300px'
        img.style.height = '300px'
        img.style.margin = '10px'

        if (idade < 15 && genero == "Homem"){
            img.setAttribute('src', 'assets/img/age/criança-menino.jpeg') 
        }else if(idade < 15 && genero == "Mulher"){
            img.setAttribute('src', 'assets/img/age/criança-menina.jpeg')
        }
        else if (idade < 30 && genero == "Homem"){
            img.setAttribute('src', 'assets/img/age/jovem-homem.jpeg')
        }
        else if(idade < 30 && genero == "Mulher"){
            img.setAttribute('src', 'assets/img/age/jovem-mulher.jpeg')
        }
        else if (idade >= 60 && genero == "Homem"){
            img.setAttribute('src', 'assets/img/age/idoso-homem.jpeg')
        }
        else if(idade >= 60 && genero == "Mulher"){
            img.setAttribute('src', 'assets/img/age/idosa-mulher.jpeg')
        }
        resultado.appendChild(img)
    }

}