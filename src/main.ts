import './output.css'
import Swiper from 'swiper';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const swiper = new Swiper('#photos-slideshow', {
    modules: [Autoplay],
    slidesPerView: 1.5,
    pagination: {
        el: ".swiper-pagination",
      },
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        waitForTransition:true ,
        reverseDirection: true,
    },
    speed:9000,
    loop: true,
    spaceBetween: 2,
    breakpoints: {
        640: { 
            slidesPerView: 2,
        },
        1024: { 
            slidesPerView: 3,
        }
    }
  });

const testimonalSlideshow = new Swiper('#testimonial-slideshow', {
  modules: [Autoplay, Pagination],
  slidesPerView: 1,
  pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  allowTouchMove: true,
  loop: true,
});

const workationSection = new Swiper("#workationSection", {
  modules:[EffectCoverflow, Pagination],
  effect: "coverflow",
  spaceBetween: 100,
  grabCursor: true,
  centeredSlides: true,
  centerInsufficientSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    modifier: 1,
    scale: 0.8,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});



const settings = {
  classes: {
    iframe: ['w-full','h-[330px]']
  }
};

	const videoElement = document.querySelector('.js-video');

  const videoID = videoElement.dataset.videoId;

  videoElement.addEventListener('click', function () {
      const iframe = document.createElement('iframe');
      settings.classes.iframe.forEach(className => {
          iframe.classList.add(className);
      });
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('src', `https://www.youtube.com/embed/JGwWNGJdvx8?rel=0&autoplay=1`);

      this.innerHTML = '';
      this.appendChild(iframe);
  });

