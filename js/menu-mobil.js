const burger =  document.querySelector('.icon-menu');
const navbarMobil = document.querySelector('.navbar-mobil');
const body = document.querySelector('.carousel');


burger.addEventListener('click', mostrar)
function mostrar() {
    if (body.classList.contains('ov-hidden') ) {
        //si el menu mobil esta cerrado
       
        if (body.id === 'light'){
            logoType.innerHTML = '<img src="img/logo2.png" alt="">'
            styleElem.innerHTML = " .lines:before, .lines:after {background: black;}";
            console.log('cerrado negro')

        }else{
            logoType.innerHTML = '<img src="img/logo.png" alt="">'
            styleElem.innerHTML = " .lines:before, .lines:after {background: white;}";
            console.log('cerrado blanco')
        }
    }else{
        //si el menu mobil esta abierto
        logoType.innerHTML = '<img src="img/logo.png" alt="">'
        styleElem.innerHTML = " .lines:before, .lines:after {background: white;}";
        console.log('abierto')
        
    }
    navbarMobil.classList.toggle('menu-close');
    burger.classList.toggle('close');
    body.classList.toggle('ov-hidden');
}



