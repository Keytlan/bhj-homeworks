const slider = Array.from(document.getElementsByClassName('slider__item'));
const arrows = Array.from(document.getElementsByClassName('slider__arrow'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));

let currentIndex = 0;
let sliderLength = slider.length; 

function changeImg(index) {
    slider[slider.findIndex(item => item.classList.contains('slider__item_active'))].className = 'slider__item';
    slider[index].className = 'slider__item slider__item_active';
    dots[dots.findIndex(item => item.classList.contains('slider__dot_active'))].className = 'slider__dot';
    dots[index].className = 'slider__dot slider__dot_active';
    currentIndex = index;
}

for (let item of arrows) {
    item.onclick = sliderArrow;
}

for (let item of dots) {
    item.onclick = sliderDots;
}

function sliderArrow() {
    if (this.classList.contains('slider__arrow_next')) {
        currentIndex === (sliderLength - 1) ? changeImg(0) : changeImg(currentIndex + 1);  
    }
    if (this.classList.contains('slider__arrow_prev')) {
        currentIndex === 0 ? changeImg(sliderLength - 1) : changeImg(currentIndex - 1);  
    }    
}

function sliderDots() {
    changeImg(dots.indexOf(this));
}