//fix menu
let getHeaderBottom = document.querySelector('.headerbottom');
let getHeaderTop = document.querySelector('.headertop');
let getHeader = document.querySelector('.header');
let heightHeaderTop = getHeaderTop.clientHeight;
let heightHeaderBottom = getHeaderBottom.clientHeight;
let prevScroll = window.pageYOffset;
function fixMenu () {
    let scrollY = window.pageYOffset;
    if (scrollY > heightHeaderTop) {
        getHeader.classList.add('active');
    } else {
        getHeader.classList.remove('active');
    }
}

window.onscroll = function() {
    let current = window.pageYOffset;
    if(prevScroll > current) {
        getHeaderBottom.classList.remove('active');
        getHeaderBottom.classList.add('fade');
    }else {
        getHeaderBottom.classList.add('active');
    }
    prevScroll = current;
    if(prevScroll === 0 ) {
        getHeaderBottom.classList.remove('active');
        getHeaderBottom.classList.remove('fade');
    }
}

document.addEventListener('scroll', function() {
    fixMenu();
});

//back top top
let totop = document.querySelector('.totop');

totop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: `smooth`,
    })
});

//show menu mobile
let navMenu = document.querySelector('.mobile');
let btnMenu = document.querySelector('.headertop__menubar');

btnMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    btnMenu.classList.toggle('change');
});

window.addEventListener('resize', function() {
    let widthWindow = window.innerWidth;
    if (widthWindow >= 767) {
        btnMenu.classList.remove('change');
        navMenu.classList.remove('active');
    }
});

//tabs index
let tabTitle = document.querySelectorAll('.tabs__title-item');
let tabList = document.querySelectorAll('.tabs__content');

tabTitle.forEach(function(item, index) {
    item.addEventListener('click', function(){
        let tabId = index + 1;
        tabTitle.forEach(function(tab){
            tab.classList.remove('active');
        });
        tabList.forEach(function(tab){
            tab.classList.remove('active');
        });
        this.classList.add('active');
        document.querySelector('.content' + tabId).classList.add('active');
    });
});

//tabs rental
let tabStudio = document.querySelectorAll('.studio__list-item');
let numberStudio = document.querySelector('.rental__studio .number');

tabStudio.forEach(function(item, index) {
    item.addEventListener('click', function(){
        let tabId = index + 1;
        tabStudio.forEach(function(tab){
            tab.classList.remove('active');
        });
        this.classList.add('active');
        numberStudio.innerHTML = (tabId).toString().padStart(2, '0');
    });
});

//slider project_detail
let $exit = $('.slider__exit');

let $carousel = $('.slider__carousel').flickity({
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: false,
});

$('.item__fullscreen').on('click', function(e) {
    e.preventDefault();
    $exit.addClass('active');
    $carousel.flickity('viewFullscreen');
});

$exit.on('click', function() {
    $exit.removeClass('active');
    $carousel.flickity('exitFullscreen');
});

//slider cafe_gbox

let $slider = $('.carousel');

$slider.flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    lazyLoad: true
});

$('.btn__prev').on( 'click', function() {
  $slider.flickity( 'previous', true );
});

$('.btn__next').on( 'click', function() {
  $slider.flickity( 'next', true );
});

//slider studio_details
let $sliderStudio = $('.slider__main').flickity({
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: false,
});

$('.nextprev__prev-btn').on( 'click', function(e) {
    e.preventDefault();
    $sliderStudio.flickity( 'previous');
});

$('.nextprev__next-btn').on( 'click', function(e) {
    e.preventDefault();
    $sliderStudio.flickity( 'next');
});

$('.fullscreen').on('click', function(e) {
    e.preventDefault();
    $exit.addClass('active');
    $sliderStudio.flickity('viewFullscreen');
});

$exit.on('click', function() {
    $exit.removeClass('active');
    $sliderStudio.flickity('exitFullscreen');
});
