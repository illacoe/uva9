
var carousel = document.querySelector('.carousel');
var indicator = document.querySelector('#indicator');
var elements = document.querySelectorAll('.carousel > *');
let logoType = document.querySelector('.logo');
let navTop = document.querySelector('.navbar');
var currentIndex = 0;
var styleElem = document.head.appendChild(document.createElement("style"));


 

function renderIndicator() {
    // this is just an example indicator; you can probably do better
    indicator.innerHTML = '';
    for (var i = 0; i < elements.length; i++) {
         
        var button = document.createElement('li');
        button.innerHTML = '<span>'+elements[i].getAttribute( 'name' )+'</<span>'
            
        // button.innerHTML = (i === currentIndex ? '<a class="active"></a><span>'+elements[i].getAttribute( 'id' )+'</<span>' : '<a></a>');
        if(i === currentIndex){
            button.classList.add('active')
            if(elements[i].getAttribute('class') === 'dark'){
                console.log('este es oscuro')
                logoType.innerHTML = '<img src="img/logo.png" alt="">'
                button.style.backgroundColor = 'white'
                styleElem.innerHTML = " .lines:before, .lines:after {background: white;}";
                indicator.classList.remove('dark-nav') 
                navTop.classList.remove('light-navtop')
            }else{
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

var observer = new IntersectionObserver(function(entries, observer) {
// find the entry with the largest intersection ratio
entries.map((entry) => {
if (entry.isIntersecting) {
console.log(entry)


}
});

var activated = entries.reduce(function (max, entry) {
    return (entry.intersectionRatio > max.intersectionRatio) ? entry : max;
});
if (activated.intersectionRatio > 0) {
    currentIndex = elementIndices[activated.target.getAttribute("id")];
    renderIndicator();
}
}, {
root:carousel, threshold:0.5
});
var elementIndices = {};
for (var i = 0; i < elements.length; i++) {
elementIndices[elements[i].getAttribute("id")] = i;
observer.observe(elements[i]);
}