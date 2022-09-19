const elementModalMain = document.getElementById('modal_main');
const elementModalSucces = document.getElementById('modal_success');
elementModalMain.className = 'modal modal_active';

const elementsClose = Array.from(document.getElementsByClassName('modal__close'));

for (let item of elementsClose) {
    item.onclick = function() {
        this.closest('.modal').className = 'modal';
        if (this.classList.contains('show-success')) {
            elementModalSucces.className = 'modal modal_active';
        }     
    }
}