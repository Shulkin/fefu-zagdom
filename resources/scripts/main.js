import './uikit';
import './swiper';
import Vue from 'vue';
import { mask } from 'vue-the-mask';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '[data-vue-request-form]',
        directives: { mask },
        data: () => ({
            phone: '',
        }),
        methods: {
            onInputPhone(event) {
                if (/^[8]/.test(event.currentTarget.value)) {
                    event.currentTarget.value = event.currentTarget.value.replace(/^[8]/g, '+7');
                }
                this.phone = event.currentTarget.value;
            },    
        },
    });
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
