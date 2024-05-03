import './output.css'
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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