let indexValue = 1;

const slideLeft = document.querySelector('.slide.left');
const slideRight = document.querySelector('.slide.right');
const img = document.querySelectorAll('.carousel_img')
slideLeft.addEventListener('click', side_slide)
slideRight.addEventListener('click', side_slide)

addBtnSliders(img)


function addBtnSliders(img) {

    for (let i = 0; i < img.length; i++) {
        let carousel = img[i].parentElement.parentElement
        let btnSliderDiv = carousel.querySelector('.btn-sliders')
        const span = document.createElement('span')
        span.classList.add('sliderBox')
        span.dataset.index = i+1;
        btnSliderDiv.append(span)
        span.addEventListener('click', btm_slider)
        if (i==0){
            span.style.background = 'white' 
        }
    }

}

function btm_slider(e) {
    let carousel = e.target.parentElement.parentElement
    indexValue=e.target.dataset.index
    showImage( carousel)
}

function side_slide(e) {

    let carousel = e.target.parentElement.parentElement.parentElement
    const carouselImg= carousel.querySelectorAll('.carousel_img')
    const direction = e.target.dataset.slider;
    if (direction === 'right') {
        indexValue++
        indexValue > carouselImg.length?indexValue = 1:indexValue
    } else {
        indexValue--
        indexValue == 0?indexValue = carouselImg.length:indexValue
    }
    showImage(carousel)
}

function showImage(carousel) {
    const slider = carousel.querySelectorAll('.btn-sliders span')
    const carouselImg= carousel.querySelectorAll('.carousel_img')
     console.log(indexValue)
   for (i = 0; i < carouselImg.length; i++) {
    carouselImg[i].style.display = 'none';
        slider[i].style.background = 'none'
    }

    carouselImg[indexValue - 1].style.display = 'block'
    slider[indexValue - 1].style.background = 'white'
}