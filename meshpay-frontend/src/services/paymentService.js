import api from "./api";

const createPayment = async (payment) => {

    const response = await api.post(

        "/api/payment",

        payment

    );

    return response.data;

};

const getHistory = async (deviceId) => {

    const response = await api.get(

        `/api/payment/history/${deviceId}`

    );

    return response.data;

};

export default {

    createPayment,

    getHistory,

};