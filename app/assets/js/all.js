$(function() {
  console.log('Hello Bootstrap5');
});

var swiperCourse = new Swiper(".swiperCourse", {
  slidesPerView: "auto",
  spaceBetween: 30, 
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 3,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
        grid: {
          rows: 1,
        },
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 0,
        grid: {
          rows: 1,
        },
      },
    },
});
const reserve = document.querySelectorAll('.reserve');

reserve.forEach(function (item) {
  item.addEventListener('click',function (e) {
    window.location="./chooseScheme.html";
  })
})
let choice = false;
const chooseScheme = document.querySelector('.chooseScheme');
const schemeLevel = document.querySelector('.schemeLevel');
const yourChoice = document.querySelector('.yourChoice')
chooseScheme.addEventListener('click',function(e){
  e.preventDefault();
  if (e.target.getAttribute('class').match('scheme')) {
    if (!choice) {
      schemeLevel.className='d-block schemeLevel bg-secondary mb-10'
    yourChoice.className='d-block yourChoice text-center mb-10'
    choice=true;
    }else{
      schemeLevel.className='d-none schemeLevel bg-secondary mb-10'
    yourChoice.className='d-none yourChoice text-center mb-10'
    choice=false;
    }
    
  }else{
    return;
  }
})