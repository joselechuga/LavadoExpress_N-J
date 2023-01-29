
/* FUNCION PARA CAMBIAR DE COLOR LA BARRA DE NAVEGACION AL REALIZAR SCROLL*/
var nav = document.getElementById('navbar');
var letranav1 = document.getElementById('letramenu');
var letranav2 = document.getElementById('letramenu2');
var letranav3 = document.getElementById('letramenu3');
var letranav4 = document.getElementById('letramenu4');

window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > 200){
        nav.classList.add('bg-primary','shadow');
        letranav1.style.color = 'beige';
        letranav2.style.color = 'beige';
        letranav3.style.color = 'beige';
        letranav4.style.color = 'beige';
     
    }else{
        nav.classList.remove('bg-primary','shadow');
        letranav1.style.color = '#141515';
        letranav2.style.color = '#141515';
        letranav3.style.color = '#141515';
        letranav4.style.color = '#141515';
    }
});

