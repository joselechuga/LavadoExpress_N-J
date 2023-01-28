
/* FUNCION PARA CAMBIAR DE COLOR LA BARRA DE NAVEGACION AL REALIZAR SCROLL*/
var nav = document.getElementById('navbar');
window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > 200){
        nav.classList.add('bg-primary','shadow');
    } else{
        nav.classList.remove('bg-primary','shadow');
    }
});

