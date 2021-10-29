// Swiper core + navigation and pagination modules
import Swiper, { Navigation, Pagination } from 'swiper';

// Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// Init Swiper:
const swiper = new Swiper('[data-swiper]', {
    // Optional parameters
    loop: true,

    // Pagination dots
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
