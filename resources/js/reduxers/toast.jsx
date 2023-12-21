import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
    name: "toast",
    initialState: { value: null },
    reducers: {
        setToast: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setToast } = toastSlice.actions;

export const toastData = (state) => state.toast.value;

export default toastSlice.reducer;
