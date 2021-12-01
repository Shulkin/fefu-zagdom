import './uikit';
import './swiper';

document.addEventListener('MapLoaded', () => {
    if (window.ymaps !== undefined) {
        ymaps.ready(() => {
            const map = new ymaps.Map('map', {
                center: [43.159, 131.945],
                zoom: 11,
            });
        });
    }
});
