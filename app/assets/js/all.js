$(function () {
  console.log("Hello Bootstrap5");
});

var swiperCourse = new Swiper(".swiperCourse", {
  slidesPerView: "auto",
  spaceBetween: 30,
});

var swiperScheme = new Swiper(".swiperScheme", {
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

var swiperTeacher = new Swiper(".swiperTeacher", {
  grid: {
    rows: 4,
  },
  breakpoints: {
    768: {
      slidesPerView: "auto",
      spaceBetween: 30,
      grid: {
        rows: 1,
      },
    },
    1200: {
      slidesPerView: "auto",
      spaceBetween: 30,
      grid: {
        rows: 1,
      },
    },
  },
});

var swiperTeacher = new Swiper(".swiperRecommend", {
  slidesPerView: "auto",
  spaceBetween: 15,
});

const reserve = document.querySelectorAll(".reserve");

reserve.forEach(function (item) {
  item.addEventListener("click", function (e) {
    window.location = "./chooseScheme.html";
  });
});
let choice = false;
const chooseScheme = document.querySelector(".chooseScheme");
const schemeLevel = document.querySelector(".schemeLevel");
const yourChoice = document.querySelector(".yourChoice");
const addArrow = document.querySelector(".scheme-card");
const firstScheme = document.querySelector(".firstScheme");
const secondScheme = document.querySelector(".secondScheme");
const thirdScheme = document.querySelector(".thirdScheme");
const nextStep = document.querySelector(".nextStep");
if (chooseScheme) {
  chooseScheme.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.getAttribute("class").match("scheme")) {
      if (!choice) {
        if (document.body.clientWidth < 992) {
          schemeLevel.className = "d-block schemeLevel bg-secondary mb-10";
          yourChoice.className = "d-block yourChoice text-center mb-10";
          addArrow.className = "scheme-card col-lg-4 mb-4 mb-md-6 mb-lg-4 arrow";
          nextStep.className = "d-block nextStep text-white btn btn-secondary-light px-26 py-2 mt-8";
          secondScheme.className =
            "secondScheme d-none col-lg-4 mb-4 mb-md-6 mb-lg-0";
          thirdScheme.className =
            "thirdScheme d-none col-lg-4 mb-4 mb-md-6 mb-lg-0";
          firstScheme.className =
            "firstScheme card rounded-1 border-secondary-light mb-md-12 mb-lg-0";
          choice = true;
        } else {
          schemeLevel.className = "d-block schemeLevel bg-secondary mb-10";
          yourChoice.className = "d-block yourChoice text-center mb-10";
          addArrow.className = "scheme-card col-lg-4 mb-4 mb-md-6 mb-lg-4 arrow";
          nextStep.className = "d-block nextStep text-white btn btn-secondary-light px-26 py-2 mt-8";
          choice = true;
        }
      } else {
        schemeLevel.className = "d-none schemeLevel bg-secondary mb-10";
        yourChoice.className = "d-none yourChoice text-center mb-10";
        addArrow.className = "scheme-card col-lg-4 mb-4 mb-md-6 mb-lg-4";
        nextStep.className="d-none nextStep text-white btn btn-secondary-light px-26 py-2 mt-8";
        secondScheme.className =
          "secondScheme d-inline-block col-lg-4 mb-4 mb-md-6 mb-lg-0";
        thirdScheme.className =
          "thirdScheme d-inline-block col-lg-4 mb-4 mb-md-6 mb-lg-0";
        firstScheme.className =
          "firstScheme card rounded-1 border-secondary-light mb-lg-0";
        choice = false;
      }
    } else {
      return;
    }
  });
}

const reservationDate = document.querySelector('input[name="datepicker"]');
if (reservationDate) {
  const datepicker = new Datepicker(reservationDate, {
    autohide:true,
    nextArrow: '>',
    prevArrow: '<',
    buttonClass: 'btn font-noto text-secondary',
  });
}

const contactUs = document.querySelector('.contactUs');
contactUs.addEventListener('click',function (e) {
  window.location = "./contactUs.html";
})

var myModal = document.getElementById('myModal')

if (myModal) {
  myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  })
}
