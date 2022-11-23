import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from './features/payment'

const store = configureStore({
    reducer: {
        payment: paymentReducer,
    }
})
export default store;