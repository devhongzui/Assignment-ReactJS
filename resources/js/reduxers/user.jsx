import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { user } from "../services/auth.jsx";

async function getUser() {
    try {
        const success = await user();
        return success.data;
    } catch (error) {
        return null;
    }
}

export const refreshUser = createAsyncThunk("user/refreshUser", getUser);

export const userSlice = createSlice({
    name: "user",
    initialState: { value: await getUser() },
    extraReducers: (builder) => {
        builder.addCase(refreshUser.fulfilled, (state, action) => {
            state.value = action.payload;
        });
    },
});

export const userData = (state) => state.user.value;

export default userSlice.reducer;
