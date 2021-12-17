import './uikit';
import './swiper';
import {FormAjax} from "./form-ajax";

const initializeVueComponents = (entries) => {
    entries.forEach(entry => {
        const node = document.querySelector(entry.el);
        if (node !== null) entry.factory(node);
        else console.warn(`Invalid Vue selector for node mounting, provided '${entry.el}' selector`)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initializeVueComponents([
        { factory: FormAjax, el: '[data-ajax-form]' },
    ]);
})
