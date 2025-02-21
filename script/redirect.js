function redirect(){
    location.replace("index.html")
}

function redirectInsta(){
    location.replace("https://www.instagram.com/pluralconstroe/")
}

function redirectFace(){
    location.replace("https://www.facebook.com/pluralconstroe?locale=pt_BR")
}

function paginaOab(){
    location.replace("projeto-oab.html")
}

function redirectEscritorio(){
    location.replace("contato.html")
}

function redirectContato(){
    location.replace("contato.html")
}

function redirectWhatsApp(){
    var phoneNumber = "5519993792100"
        var message = "Olá, Silas! Estou interessado nos serviços. Poderia me passar mais informações?"
        var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message)

        window.location.href = url
}

function redirectWhatsApp2(){
    var phoneNumber = "5519991277992"
        var message = "Olá, Samuel! Estou interessado nos serviços. Poderia me passar mais informações?"
        var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message)

        window.location.href = url
}