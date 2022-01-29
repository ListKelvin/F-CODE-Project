//popup-video
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal-3.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-3')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//Nav-bar
addEventListener('scroll', function(){
    var header = document.querySelector('header');
    var windowPosition = window.scrollY > 0
    header.classList.toggle('scrolling-active', windowPosition );
    })
  
//slick
$(document).ready(function () {
  $(".slick-track").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 100000,
      Infinity: true,
      arrows: false,
      dots: false,
      // draggable: false,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });
});

//slick-brand
$(document).ready(function () {
  $(".list-brand").slick({
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 4000,
      Infinity: true,
      arrows: false,
      // draggable: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
});

//progress-bar 
const skillsSection = document.getElementById('skill-section')

const progressBars = document.querySelectorAll('.progress-bar')

function showProgress(){
  progressBars.forEach(progressBars => {
    const value = progressBars.dataset.progress
    progressBars.style.opacity = 1
    progressBars.style.width = `${value}%`
   
  })
}

function hideProgress() {
  progressBars.forEach(p => {
    // p.style.opacity = 0
    p.style.width = 0
  })
}

window.addEventListener('scroll',()=>{
  const sectionPos = skillsSection.getBoundingClientRect().top
  const screenPos = window.innerHeight 
  
  
if(sectionPos < screenPos){
  showProgress()
}else{
  hideProgress()
}
})     

//menu-btn-animation
const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
menuBtn.addEventListener('click', () => {
  // if(!menuOpen) {
  //   menuBtn.classList.add('open');
  //   menuOpen = true;
  // } else {
  //   menuBtn.classList.remove('open');
  //   menuOpen = false;
  // }
  menuBtn.classList.toggle('open')
});

// repo navbar
const coll = document.getElementsByClassName("collapsible");
let i;
const navShow = document.getElementById("nav-bar")

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    navShow.classList.toggle("repo");
    // const content = document.getElementById('nav-bar')
    //   content.classList.toggle("repo")
    // if (content.style.maxHeight){
    //   content.style.maxHeight = null;
    // } else {
    //   content.style.maxHeight = content.scrollHeight + "px";
    // }
  });
 }