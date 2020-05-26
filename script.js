function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `<strong>Agora são ${hora} Horas.</strong>`
if (hora >= 0 && hora <12){
    img.src = 'manha.png'
    document.body.style.background = 'rgba(184, 182, 65, 0.596)'
}else if(hora >= 12 && hora <18){
    img.src = 'tarde.png'
    document.body.style.background ='rgb(221, 124, 68)'
}else{
    img.src = 'noite.png'
    document.body.style.background = 'rgb(14, 13, 26)'
}
}