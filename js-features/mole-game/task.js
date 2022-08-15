const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = killMole;
}

let deadCounter = 0;
let lostCounter = 0;

function killMole() {
    if (this.classList.contains( 'hole_has-mole' )) {
        deadCounter += 1;
        if (deadCounter === 10) {
            alert('Победа!');
            deadCounter = 0;
            lostCounter = 0;
        }
    } else {
        lostCounter += 1;
        if (lostCounter === 5) {
            alert('Вы проиграли');
            deadCounter = 0;
            lostCounter = 0;            
        }
    }
    dead.textContent = deadCounter;
    lost.textContent = lostCounter;    
}