//For Live Projects
const loader = document.getElementById('loader-wrapper');
window.addEventListener('load',function(){
    setTimeout(function(){ document.querySelector('body').classList.add("loaded");  }, 3000);
    
  });