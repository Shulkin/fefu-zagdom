import Vue from 'vue';
import { mask } from 'vue-the-mask';

const formDataSchema = () => ({
    name: '',
    phone: '',
    message: '',
});

const createPayload = (data) => ({
    name: data.name,
    phone: data.phone,
    message: data.message,
})

export default (el, name) =>
    new Vue({
        el,
        name,
        directives: { mask },
        data: () => ({
            data: formDataSchema(),
            isLoading: false,
        }),
        methods: {
            async submit() {
                if (this.isLoading) return;

                const payload = createPayload(this.data);

                try {
                    const response = await fetch('/api/request', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json;charset=utf-8' },
                        body: JSON.stringify(payload),
                    });

                    const result = await response.json();

                    alert('Ваша заявка успешно отправлена');
                } catch (error) {
                    console.warn(error);
                } finally {
                    this.isLoading = false;
                }
            },

            onInputPhone(event) {
                if (/^[8]/.test(event.currentTarget.value)) {
                    event.currentTarget.value = event.currentTarget.value.replace(/^[8]/g, '+7');
                }
                this.data.phone = event.currentTarget.value;
            },    
        },
    });
