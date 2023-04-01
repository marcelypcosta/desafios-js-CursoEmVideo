let c = document.querySelector('#body')

window.addEventListener('load', carregar) // window, pois o método 'load' é da página não do documento

function carregar(){
    let hoursNow = document.querySelector('#hours')
    let backgroundMain = document.querySelector('.caixa')

    let nowDate = new Date
    let hora = nowDate.getHours()
    let minuto = nowDate.getMinutes()
    let segundos = nowDate.getSeconds()

    hoursNow.innerHTML = `${hora} : ${minuto} : ${segundos}`

    if (hora < 6){
        backgroundMain.style.backgroundImage = 'url(assets/img/clock/dawn.jpeg)'
    }
    else if (hora < 12){
        backgroundMain.style.backgroundImage = 'url(assets/img/clock/morning.jpeg)'
    }
    else if (hora <= 18){
        backgroundMain.style.backgroundImage = 'url(assets/img/clock/afternoon.jpeg)'
    }
    else{
        backgroundMain.style.backgroundImage = 'url(assets/img/clock/night.jpeg)'
    }

}