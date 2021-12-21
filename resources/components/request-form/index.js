import Vue from 'vue';
import { mask } from 'vue-the-mask';

const formDataSchema = () => ({
    name: '',
    phone: '',
    message: '',
});

export default (el, name) =>
    new Vue({
        el,
        name,
        directives: { mask },
        data: () => ({
            data: formDataSchema(),
        }),
        methods: {
            onInputPhone(event) {
                if (/^[8]/.test(event.currentTarget.value)) {
                    event.currentTarget.value = event.currentTarget.value.replace(/^[8]/g, '+7');
                }
                this.data.phone = event.currentTarget.value;
            },    
        },
    });
