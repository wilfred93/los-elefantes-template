import './output.css'
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const swiper = new Swiper('.swiper', {
    modules: [Autoplay],
    slidesPerView: 1.5,
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