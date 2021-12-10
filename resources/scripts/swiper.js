import Swiper, { Navigation, Pagination } from 'swiper';

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  Swiper.use([Navigation, Pagination]);

  const swiper = new Swiper('[data-swiper]', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });