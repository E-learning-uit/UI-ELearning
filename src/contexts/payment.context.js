import api from '../services/api.service';



export default class PaymentContext {
    async createOrder(data) {
        let data1 = JSON.parse(localStorage.getItem('eLearning_data'));
        if (!data1) return new Error();
        api.defaults.headers.Authorization = "Bearer " + data1.token;
        const response = api.post('/create-order', data);
        return response;
    }
    async checkPayment(data){
        let data1 = JSON.parse(localStorage.getItem('eLearning_data'));
        if (!data1) return new Error();
        api.defaults.headers.Authorization = "Bearer " + data1.token;
        const response = api.post('/users-paid', data);
        return response;
    }
}