import './uikit';
import './swiper';
import initRequestForm from '../components/request-form';

function initModals() {
    const modals = document.querySelectorAll('[data-uk-modal]');
    modals.forEach(modal => {
        const forms = modal.querySelectorAll('[data-form]');
        modal.addEventListener('hide', () => {
            forms.forEach(form => {
                form.dispatchEvent(new Event('hide'));
            });
        });
    });
}

window.onload = () => {
    initModals();
};

document.addEventListener('DOMContentLoaded', () => {
    initRequestForm('[data-vue-request-form]', 'request-form');
});

document.addEventListener('MapLoaded', () => {
    if (window.ymaps !== undefined) {
        ymaps.ready(() => {
            const map = new ymaps.Map('map', {
                center: [43.159, 131.945],
                controls: ['geolocationControl', 'zoomControl', 'fullscreenControl'],
                zoom: 11,
            });

            const placemark = new ymaps.Placemark(map.getCenter(), {}, {
                iconLayout: 'default#image',
                iconImageHref: 'assets/icons/map-marker-green.svg',
                iconImageSize: [42, 56],
                iconImageOffset: [-21, -56],
            });

            map.geoObjects.add(placemark);
        });
    }
});
