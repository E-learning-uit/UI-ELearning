import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    infoCourse: {
        course_id:0,
        amount: 0,
        title: '',
        thumbnail: '',
        discount: 0,
        description:''
    }
}
const paymentReducer = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        updateInfoCourse(state, action) {
            state.infoCourse = action.payload
        }
    }
})
const { actions, reducer } = paymentReducer;
export const { updateInfoCourse } = actions
export default reducer;