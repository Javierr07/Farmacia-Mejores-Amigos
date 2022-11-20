const menumobileicon = document.querySelector('.icon-menu-mobile');
const menumobile = document.querySelector('.container-menu-mobile');
const container = document.querySelector('.container');


menumobileicon.addEventListener('click', abrirmenu);

function abrirmenu(){
    containeractivo = container.classList.contains('inactive');

    if(!containeractivo){
        container.classList.add('inactive');
    }
    else{
        container.classList.toggle('inactive');
    }
    menumobile.classList.toggle('inactive');
    
}



