import Vue from "vue";
import axios from "axios";

const Routes = {
    FeedbackCreate: '/api/feedback/create',
}

const constFormData = () => ({ name: '', phone: '', message: '' })

Vue.use((instance) => {
    instance.prototype.$http = axios;
    instance.prototype.$http.interceptors.request.use((config) => {
        config.headers['App-Platform'] = 'Website';
        config.headers['Another-Crypto-Key'] = 'RandomSafeBase64Bytes';
        return config;
    })
})

export const FormAjax = (el) => new Vue({
    el,
    name: 'form-ajax',
    data: () => ({
        token: null,
        formData: constFormData(),
    }),
    beforeMount() {
        this.token = window.csrfToken;
    },
    methods: {
        async submitHandler() {
            const response = await axios.post(Routes.FeedbackCreate, this.formData);

            console.log({
                    request: { ...this.formData },
                    response: response.data,
            });
        }
    }
})
