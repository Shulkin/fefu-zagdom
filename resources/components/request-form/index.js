import Vue from 'vue';
import get from 'lodash-es/get';
import { mask } from 'vue-the-mask';
import UIkit from '../../scripts/uikit';

const formDataSchema = () => ({
    name: '',
    phone: '',
    message: '',
});

const createPayload = (data) => ({
    name: data.name,
    phone: data.phone,
    message: data.message,
});

const phoneRule = /(\+7) (\d{3}) (\d{3})-(\d{2})-(\d{2})/i;

const validation = {
    name: {
        target: 'data.name',
        handler: (value) => {
            return value !== '';
        },
        message: () => {
            return 'Заполните поле';
        },
    },
    phone: {
        target: 'data.phone',
        handler: (value) => {
            return value !== '' && phoneRule.test(value);
        },
        message: (value) => {
            if (value === '') return 'Заполните поле';
            if (!phoneRule.test(value)) return 'Заполните поле полностью';
            return 'Неверное значение';
        },
    },
    message: {
        target: 'data.message',
        handler: (value) => {
            return value !== '';
        },
        message: () => {
            return 'Заполните поле';
        },
    },
};

export default (el, name) =>
    new Vue({
        el,
        name,
        directives: { mask },
        data: () => ({
            data: formDataSchema(),
            invalidFields: {},
            isLoading: false,
        }),
        watch: {
            'data.name'() {
                delete this.invalidFields['name'];
            },
            'data.phone'() {
                delete this.invalidFields['phone'];
            },
            'data.message'() {
                delete this.invalidFields['message'];
            },
        },
        methods: {
            async submit() {
                if (this.isLoading) return;

                if (!this.isValidForm(['name', 'phone', 'message'])) return
                else this.clearInvalidFields();

                const payload = createPayload(this.data);

                try {
                    const response = await fetch('/api/request', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json;charset=utf-8' },
                        body: JSON.stringify(payload),
                    });

                    const result = await response.json();

                    alert('Ваша заявка успешно отправлена');

                    this.close();
                    setTimeout(this.clearForm, 1000);
                } catch (error) {
                    console.warn(error);
                } finally {
                    this.isLoading = false;
                }
            },

            isValidForm(fields) {
                let result = true;
                for (const key of fields) {
                    const { target, handler, message } = validation[key];
                    const value = get(this, target);
                    if (!handler(value)) {
                        this.$set(this.invalidFields, key, message(value));
                        result = false;
                    }
                }
                return result;
            },

            isInvalidField(key) {
                return key in this.invalidFields;
            },

            getErrorMessage(key) {
                return this.invalidFields[key];
            },

            clearInvalidFields() {
                this.invalidFields = {};
            },

            clearForm() {
                this.data = formDataSchema();
            },

            close() {
                UIkit.modal('#request').hide();
            },

            onInputPhone(event) {
                if (/^[8]/.test(event.currentTarget.value)) {
                    event.currentTarget.value = event.currentTarget.value.replace(/^[8]/g, '+7');
                }
                this.data.phone = event.currentTarget.value;
            },

            onHide() {
                this.clearInvalidFields();
            },
        },
    });
