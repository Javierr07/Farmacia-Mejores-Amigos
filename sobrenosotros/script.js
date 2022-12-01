/*crearemos la logica para el funcionamiento en mobile*/ 

const iconmenumobile = document.querySelector('.icon-menu-mobile');
const menumobile = document.querySelector('.container-menu-mobile');
const container = document.querySelector('.container-nos');
const iconacercade = document.querySelector('.link-acerca');

iconmenumobile.addEventListener('click', abrirmenumobile);
iconacercade.addEventListener('click', abriracerca);

function abrirmenumobile(){
    const menumobileactivo = menumobile.classList.contains('inactive');

    if (!menumobileactivo){
        menumobile.classList.add('inactive');
        container.classList.toggle('inactive');
    }
    else{
        menumobile.classList.toggle('inactive');
        container.classList.add('inactive');
    }
    
}
