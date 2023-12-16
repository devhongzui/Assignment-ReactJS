import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
    name: "toast",
    initialState: {
        value: null,
    },
    reducers: {},
});

export default toastSlice.reducer;
