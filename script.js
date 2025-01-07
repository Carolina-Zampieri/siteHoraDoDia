function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.backgroundImage = "url('img/manha.jpg')"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.backgroundImage = "url('img/tarde.jpg')"
    } else {
        img.src = 'noite.jpg'
        document.body.style.backgroundImage = "url('img/noite.jpg')"
    }
}