const burger =  document.querySelector('.icon-menu')
const navbarMobil = document.querySelector('.navbar-mobil')
const body = document.querySelector('.carousel') 

burger.addEventListener('click', mostrar)
function mostrar() {
    if (!body.classList.contains('ov-hidden') ) {
        logoType.innerHTML = '<img src="img/logo.png" alt="">'
        styleElem.innerHTML = " .lines:before, .lines:after {background: white;}";
    }else{
        logoType.innerHTML = '<img src="img/logo2.png" alt="">'
        styleElem.innerHTML = " .lines:before, .lines:after {background: black;}";
    }
    navbarMobil.classList.toggle('menu-close')
    burger.classList.toggle('close')
    body.classList.toggle('ov-hidden')
}

