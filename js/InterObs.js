
const carousel = document.querySelector('.carousel');
const indicator = document.querySelector('#indicator');
let elements = document.querySelectorAll('.carousel > *');
const logoType = document.querySelector('.logo');
const navTop = document.querySelector('.navbar');
let currentIndex = 0;
let styleElem = document.head.appendChild(document.createElement("style"));

// let burger =  document.querySelector('.icon-menu');
// let navbarMobil = document.querySelector('.navbar-mobil');

 

function renderIndicator() {
    // this is just an example indicator; you can probably do better
    indicator.innerHTML = '';
    for (let i = 0; i < elements.length; i++) {
         
        let button = document.createElement('li');
        button.innerHTML = '<span>'+elements[i].getAttribute('name')+'</<span>'
        
        // button.innerHTML = (i === currentIndex ? '<a class="active"></a><span>'+elements[i].getAttribute( 'id' )+'</<span>' : '<a></a>');
        if(i === currentIndex){
            button.classList.add('active');
            
            let color = elements[i].getAttribute('class');
 

            if(color === 'dark'){ 
                carousel.setAttribute("id", "dark");
                
                console.log('este es oscuro')
                logoType.innerHTML = '<img src="img/logo.png" alt="">'
                button.style.backgroundColor = 'white'
                styleElem.innerHTML = " .lines:before, .lines:after {background: white;}";
                indicator.classList.remove('dark-nav') 
                navTop.classList.remove('light-navtop')
            }else{ 
                carousel.setAttribute("id", "light");
                console.log('este es claro')
                logoType.innerHTML = '<img src="img/logo2.png" alt="">'
                button.style.backgroundColor = 'black' 
                styleElem.innerHTML = " .lines:before, .lines:after {background: black;}";
                indicator.classList.add('dark-nav')
                navTop.classList.add('light-navtop')
                button.firstChild.style.color = 'black'
            }


                // {button.style.backgroundColor = 'black' }
            // button.innerHTML = '<span>'+elements[i].getAttribute( 'id' )+'</<span>'
        }
        (function(i) {
        button.onclick = function() {
            elements[i].scrollIntoView();

        }
        })(i);
        indicator.appendChild(button);
    }
}

let observer = new IntersectionObserver(function(entries, observer) {
// find the entry with the largest intersection ratio
entries.map((entry) => {
if (entry.isIntersecting) {
console.log(entry)


}
});

let activated = entries.reduce(function (max, entry) {
    return (entry.intersectionRatio > max.intersectionRatio) ? entry : max;
});
if (activated.intersectionRatio > 0) {
    currentIndex = elementIndices[activated.target.getAttribute("id")];
    renderIndicator();
}
}, {
root:carousel, threshold:0.5
});
let elementIndices = {};
for (let i = 0; i < elements.length; i++) {
elementIndices[elements[i].getAttribute("id")] = i;
observer.observe(elements[i]);
}