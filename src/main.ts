import './output.css'
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const swiper = new Swiper('.swiper', {
    modules: [Autoplay],
    slidesPerView: 3,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        waitForTransition:true ,
        reverseDirection: true,
    },
    speed:3000,
    loop: true,
    spaceBetween: 7,

  });