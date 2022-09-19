const menu = Array.from(document.getElementsByClassName('menu__link'));

for (let item of menu) {
    item.onclick = liveMenu;
}

function liveMenu() {    
    if (this.nextElementSibling.classList.contains('menu_active')) {
        this.nextElementSibling.className = 'menu menu_sub';
        return false; 
    }
    if (this.closest('ul').querySelector('.menu_active')) {
        this.closest('ul').querySelector('.menu_active').className = 'menu menu_sub';
    }  
    if (this.nextElementSibling.classList.contains('menu_sub')) { 
        this.nextElementSibling.classList.contains('menu_active') ? this.nextElementSibling.className = 'menu menu_sub' : this.nextElementSibling.className = 'menu menu_sub menu_active';
        return false; 
    }
}