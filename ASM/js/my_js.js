const menu = document.getElementById('menu');
const menu_hidden = document.getElementById('menu_hidden');

let isBlock = false;

menu.addEventListener('click', function() {
    if(isBlock==false){
        menu_hidden.style.display = 'block';
        isBlock=true; 
    }else{
        menu_hidden.style.display = 'none';
        isBlock=false; 
    }
});